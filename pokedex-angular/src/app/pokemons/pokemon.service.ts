import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, forkJoin, map, Observable, of } from 'rxjs';
import {
  PokemonApi,
  PokemonDetailsApi,
  PokemonEvolution,
  PokemonEvolutionChain,
  PokemonGeneration,
  PokemonSpecies,
} from '../utils/types';
import {
  pokemonTypeColorMap,
  pokemonColorMap,
} from '../utils/pokemonColorHash';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private api: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonList(offset: number, limit: number) {
    return this.http
      .get<{ results: PokemonDetailsApi[] }>(
        `${this.api}/pokemon?limit=${limit}&offset=${offset}`
      )
      .pipe(
        map((data) => {
          return data.results.map((pokemon: PokemonDetailsApi) => {
            const id = this.getPokemonIdByUrl(pokemon.url);
            return {
              id: Number(id),
              name: pokemon.name,
              image: this.getPokemonImageUri(Number(id)),
              color: pokemonColorMap[id],
            };
          });
        })
      ) as Observable<PokemonApi[]>;
  }

  getPokemonInformation(id: string) {
    const species = this.getPokemonSpecies(id);
    const details = this.getPokemonDetails(id);
    return forkJoin([species, details]).pipe(
      map(([species, details]) => {
        const updatedPokemon = {
          ...details,
          types: details.types.map((data) => {
            return {
              name: data.type.name,
              color: pokemonTypeColorMap[data.type.name],
            };
          }),
          evolution_chain: species.evolution_chain,
          description: this.getDescription(species),
          image: this.getPokemonImageUri(Number(id)),
          color: pokemonColorMap[id],
        };
        return updatedPokemon;
      })
    ) as Observable<PokemonApi>;
  }

  getDescription(species: PokemonSpecies) {
    let description: Awaited<string[]> = [];
    species.flavor_text_entries
      .filter((description) => description.language.name === 'en')
      .map((description) =>
        description.flavor_text.replace('\n', ' ').replace('\f', ' ')
      )
      .forEach((des, index) => {
        description[index] = des;
      });
    return [...new Set(description)];
  }

  getPokemonDetails(id: string) {
    return this.http.get(`${this.api}/pokemon/${id}`) as Observable<PokemonApi>;
  }

  getPokemonImageUri(id: number) {
    const imageId = ('000' + id).slice(-3); // para 1 => 001
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
  }

  getPokemonNumber(id: number) {
    return ('000' + id).slice(-3);
  }

  getPokemonIdByUrl(url: string) {
    return url.split('/').slice(-2, -1)[0];
  }

  getPokemonSpecies(id: string) {
    return this.http
      .get<PokemonSpecies>(`${this.api}/pokemon-species/${id}`)
      .pipe(
        map((data) => {
          return {
            ...data,
            image: this.getPokemonImageUri(data.id),
          };
        })
      ) as Observable<PokemonSpecies>;
  }

  getPokemonsByGeneration(generation: string) {
    return this.http.get<{ pokemon_species: PokemonDetailsApi[] }>(
      `${this.api}/generation/${generation}`
    ).pipe(
      map((data) => {
        return data.pokemon_species.map((pokemon: PokemonDetailsApi) => {
          const id = this.getPokemonIdByUrl(pokemon.url);
          return {
            id: Number(id),
            name: pokemon.name,
            image: this.getPokemonImageUri(Number(id)),
            color: pokemonColorMap[id],
          };
        });
      })
    ) as Observable<PokemonApi[]>;
  }

  getPokemonEvolutions(url: string) {
    return this.http.get<{ chain: PokemonEvolutionChain }>(url).pipe(
      catchError((error, data) => {
        return of(null);
      })
    );
  }
}
