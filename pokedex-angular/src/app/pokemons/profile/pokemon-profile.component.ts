import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  PokemonApi, PokemonSpeciesImage,
} from 'src/app/utils/types';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss'],
})
export class PokemonProfileComponent {
  pokemonProfile!: PokemonApi;
  pokemonSpecies!: PokemonSpeciesImage;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
    this.pokemonProfile = this.route.snapshot.data['pokemon'];
    this.pokemonSpecies = this.route.snapshot.data['species'];
  }

  goBack() {
    this.location.back();
  }

  getFormattedNumber(id: number) {
    return this.pokemonService.getPokemonNumber(id);
  }
}
