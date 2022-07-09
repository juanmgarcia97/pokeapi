import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private pokemonService: PokemonService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.myPokedex = this.router.snapshot.data['pokemons'].results;
    this.displayPokedex = this.myPokedex.map(this.updatePokedex, this);
    this.displayPokedex = this.displayPokedex;
    this.offset += this.limit;
  }

  updatePokedex(pokemon: { name: string; url: string }): Pokemon {
    const id = this.pokemonService.getPokemonIdByUrl(pokemon.url);
    return {
      id: id,
      ...pokemon,
      image: this.pokemonService.getPokemonImageUri(id),
      color: pokemonColorMap[id],
    };
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
