import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { Pokemon, PokemonApi, PokemonSpecies } from '../utils/types';

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

  getPokemonSpecies(url: string) {
    return lastValueFrom(this.http.get(url)) as Promise<PokemonSpecies>;
  }
}
