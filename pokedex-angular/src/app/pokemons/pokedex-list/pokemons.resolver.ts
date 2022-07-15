import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Pokemon, PokemonApi } from 'src/app/utils/types';
import { PokemonService } from '../pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonsResolver implements Resolve<PokemonApi[]> {
  constructor(private pokemonService: PokemonService) {}

  resolve() {
    return this.pokemonService.getPokemonList(0, 50);
  }
}
