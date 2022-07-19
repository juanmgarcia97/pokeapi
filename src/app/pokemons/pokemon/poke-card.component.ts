import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/utils/types';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss'],
})
export class PokeCardComponent {
  constructor(private router: Router, private pokemonService: PokemonService) {}
  @Input()
  pokemon!: Pokemon;

  goToPokemonProfile() {
    this.router.navigate([`/pokedex/${this.pokemon.id}`]);
  }

  getNumber(id: number) {
    return this.pokemonService.getPokemonNumber(id);
  }

  getColor(color: string) {
    return color.split('#')[1].startsWith('f') ? 'black' : 'white'
  }
}
