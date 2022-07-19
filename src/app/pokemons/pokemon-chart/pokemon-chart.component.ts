import { Component, Input } from '@angular/core';
import { Stat } from 'src/app/utils/types';

@Component({
  selector: 'app-poke-chart',
  templateUrl: './pokemon-chart.component.html',
  styleUrls: ['./pokemon-chart.component.scss'],
})
export class PokemonChartComponent {
  @Input() stats: Stat[] = [];
}
