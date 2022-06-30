import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/utils/types';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss'],
})
export class PokeCardComponent {
  constructor(private router: Router) {}
  @Input()
  pokemon: Pokemon = {
    id: 0,
    name: '',
    color: '',
    url: '',
  };
  goToPokemonProfile() {
    this.router.navigate([`/pokedex/${this.pokemon.id}`]);
  }
}
