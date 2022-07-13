import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import {
  FlavorText,
  Pokemon,
  PokemonApi,
  PokemonSpecies,
} from 'src/app/utils/types';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss'],
})
export class PokemonProfileComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  pokemonProfile!: PokemonApi;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
    this.pokemonProfile = this.route.snapshot.data['pokemon'];
  }

  async ngOnInit() {
    // await this.getDescription();
  }

  goBack() {
    this.location.back();
  }

  getFormattedNumber(id: number) {
    return this.pokemonService.getPokemonNumber(id);
  }
}
