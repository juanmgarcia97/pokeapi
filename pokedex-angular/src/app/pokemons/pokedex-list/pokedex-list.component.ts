import { Component, OnInit } from '@angular/core';
import {
  pokedex,
  pokemonColorMap,
  getPokemonImageUri,
} from 'src/app/utils/mock-data';
import { Pokemon } from 'src/app/utils/types';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './podekex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent implements OnInit {
  myPokedex: Pokemon[] = pokedex;

  ngOnInit(): void {
    this.myPokedex.map((pokemon, index) => {
      const realIndex: number = index + 1;
      pokemon.url = getPokemonImageUri(realIndex);
      pokemon.color = pokemonColorMap[realIndex];
    });
  }
}
