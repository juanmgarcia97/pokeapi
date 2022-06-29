import { Component, Input, OnInit } from '@angular/core';
import { pokedex, pokemonColorMap } from 'src/app/utils/mock-data';
import { Pokemon } from 'src/app/utils/types';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './podekex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent implements OnInit {
  myPokedex: Pokemon[] = pokedex;
  limit: number = 50;
  offset: number = 0;
  @Input()
  search = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.myPokedex.map((pokemon, index) => {
      const realIndex: number = index + 1;
      pokemon.id = realIndex;
      pokemon.url = this.pokemonService.getPokemonImageUri(realIndex);
      pokemon.color = pokemonColorMap[realIndex];
    });
    // this.pokemonService
    //   .getPokemonList(this.offset, this.limit)
    //   .subscribe((data: { results: Pokemon[] }) => {
    //     this.myPokedex = [...this.myPokedex, ...data.results];
    //   });
    // this.offset += this.limit;
  }

  filterPokedex(event: any) {
    console.log(event);

    // this.myPokedex.filter((pokemon) => {
    //   return pokemon.name.includes(text);
    // });
  }
}
