import { Component, OnInit } from '@angular/core';
import { Pokemon, pokedex, pokemonColorMap } from 'src/assets/utils';

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
      pokemon.url = this.getPokemonImageUri(realIndex);
      pokemon.color = pokemonColorMap[realIndex];
    });
  }

  getPokemonImageUri(id: number) {
    const imageId = ('00' + id).slice(-3); // para 1 => 001
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
  }
}
