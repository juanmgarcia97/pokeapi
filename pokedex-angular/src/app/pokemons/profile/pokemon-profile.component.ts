import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, PokemonApi } from 'src/app/utils/types';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss'],
})
export class PokemonProfileComponent implements OnInit {
  pokemon!: Pokemon;
  pokemonProfile!: PokemonApi;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe(
      (data) => (this.pokemon = data[1].parameters as unknown as Pokemon)
    );
    this.pokemonService
      .getPokemonInformation(this.pokemon.url)
      .subscribe((data) => (this.pokemonProfile = data));
  }

  goBack() {
    this.location.back();
  }

  getNumber(id: number) {
    return this.pokemonService.getPokemonNumber(id);
  }
}
