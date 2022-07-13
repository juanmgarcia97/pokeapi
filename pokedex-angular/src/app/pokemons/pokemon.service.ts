import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, lastValueFrom, map, Observable } from 'rxjs';
import { Pokemon, PokemonApi, PokemonSpecies } from '../utils/types';
import { pokemonColorMap } from '../utils/mock-data';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private api: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonList(offset: number, limit: number) {
    return this.http.get(
      `${this.api}/pokemon?limit=${limit}&offset=${offset}`
    ) as Observable<{ results: Pokemon[] }>;
  }

  getPokemonInformation(id: string) {
    const species = this.getPokemonSpecies(id);
    const details = this.getPokemonDetails(id);
    return forkJoin([species, details]).pipe(
      map((pokemon) => {
        const updatedPokemon = {
          ...pokemon[1],
          description: this.getDescription(pokemon[0]),
          image: this.getPokemonImageUri(Number(id)),
          color: pokemonColorMap[Number(id)],
        };
        return updatedPokemon;
      })
    ) as Observable<PokemonApi>;
  }

  getDescription(species: PokemonSpecies) {
    let description: Awaited<string[]> = [];
    const replacedDescription = species.flavor_text_entries
      .filter((description) => description.language.name === 'en')
      .map((description) =>
        description.flavor_text.replace('\n', ' ').replace('\f', ' ')
      );
    replacedDescription.forEach((des, index) => {
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
    return Number(url.split('/')[6]);
  }

  getPokemonSpecies(id: string) {
    return this.http.get(
      `${this.api}/pokemon-species/${id}`
    ) as Observable<PokemonSpecies>;
  }

  getPokemonsByGeneration(generation: number) {
    return this.http.get(`${this.api}/generation/${generation}`);
  }
}
