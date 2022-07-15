import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { pokemonColorMap } from 'src/app/utils/mock-data';
import { Pokemon, PokemonApi } from 'src/app/utils/types';
import { PokemonService } from '../pokemon.service';
import { generations } from './pokedex-list.generations';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './podekex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent implements OnInit {
  myPokedex: PokemonApi[] = [];
  displayPokedex: PokemonApi[] = [];
  limit: number = 50;
  offset: number = 0;
  @Input()
  search = '';
  pokemonGenerations = generations;
  generationSelected = '0';

  constructor(
    private pokemonService: PokemonService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.myPokedex = this.router.snapshot.data['pokemons'];
    this.displayPokedex = this.myPokedex;
    this.offset += this.limit;
  }

  getPokemonGeneration() {
    // this.pokemonService
    //   .getPokemonsByGeneration(this.generationSelected)
    //   .subscribe((pokemons) => {
    //     console.log(pokemons.slice(0, 50));

    //     this.myPokedex = [...this.myPokedex, ...pokemons];
    //     this.displayPokedex = this.myPokedex;
    //   });
  }

  paginator() {
    this.pokemonService
      .getPokemonList(this.offset, this.limit)
      .subscribe((data) => {
        this.myPokedex = data;
        this.displayPokedex = this.myPokedex;
      });
    this.offset += this.limit;
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
