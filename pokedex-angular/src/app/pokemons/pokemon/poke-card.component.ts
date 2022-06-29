import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/utils/types';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss'],
})
export class PokeCardComponent {
  @Input()
  pokemon: Pokemon = {
    id: 0,
    name: '',
    color: '',
    url: '',
  };
}
