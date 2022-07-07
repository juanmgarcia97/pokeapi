import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon, PokemonApi } from '../utils/types';
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

  getPokemonInformation(url: string) {
    return this.http.get(url) as Observable<PokemonApi>;
  }

  getPokemonImageUri(id: number) {
    const imageId = ('00' + id).slice(-3); // para 1 => 001
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
  }

  getPokemonNumber(id: number) {
    return ('00' + id).slice(-3);
  }
}
