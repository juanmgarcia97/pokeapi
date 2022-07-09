import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { Pokemon, PokemonApi, PokemonSpecies } from 'src/app/utils/types';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss'],
})
export class PokemonProfileComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  pokemonProfile!: PokemonApi;
  pokemonSpecies!: PokemonSpecies;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {
    const nav = router.getCurrentNavigation() as Navigation;
    if (nav.extras.state) {
      this.pokemon = nav.extras.state['pokemon'] as Pokemon;
    }
  }

  ngOnInit(): void {
    this.pokemonProfile = this.route.snapshot.data['pokemon'];
    this.pokemonService
      .getPokemonSpecies(this.pokemonProfile.species.url)
      .then((data) => (this.pokemonSpecies = data));
  }

  goBack() {
    this.location.back();
  }

  getFormattedNumber(id: number) {
    return this.pokemonService.getPokemonNumber(id);
  }
}
