import { Component, Input, OnInit } from '@angular/core';
import { pokemonColorMap } from 'src/app/utils/mock-data';
import { Pokemon } from 'src/app/utils/types';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './podekex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent implements OnInit {
  myPokedex: Pokemon[] = [];
  displayPokedex: Pokemon[] = [];
  limit: number = 50;
  offset: number = 0;
  @Input()
  search = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.retrievePokemons();
  }

  retrievePokemons() {
    this.pokemonService
      .getPokemonList(this.offset, this.limit)
      .subscribe((data: { results: Pokemon[] }) => {
        this.myPokedex = [...this.myPokedex, ...data.results];
        this.displayPokedex = this.updatePokedex(data);
      });
    this.offset += this.limit;
  }

  updatePokedex(data: { results: Pokemon[] }) {
    return data.results.map((pokemon, index) => {
      const realIndex: number = index + 1;
      pokemon.id = this.pokemonService.getPokemonIdByUrl(pokemon.url);
      pokemon.image = this.pokemonService.getPokemonImageUri(pokemon.id);
      pokemon.color = pokemonColorMap[realIndex];
      return pokemon;
    });
  }

  filterPokedex(event: any) {
    this.displayPokedex = this.myPokedex.filter((pokemon) => {
      return pokemon.name.includes(event);
    });
    this.sortPokemons();
  }

  sortPokemons() {
    this.displayPokedex.sort((actual, next) =>
      actual.name.localeCompare(next.name)
    );
  }
}
