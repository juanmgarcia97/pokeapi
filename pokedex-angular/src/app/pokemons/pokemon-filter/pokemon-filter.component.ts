import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/utils/types';

@Component({
  selector: 'app-pokemon-filter',
  templateUrl: './pokemon-filter.component.html',
  styleUrls: ['./pokemon-filter.component.scss'],
})
export class PokemonFilterComponent {
  searchText: string = '';
  @Output()
  filter = new EventEmitter<string>();
}
