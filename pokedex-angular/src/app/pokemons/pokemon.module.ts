import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonEvolutionComponent } from './evolution/pokemon-evolution.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokemonChartComponent } from './pokemon-chart/pokemon-chart.component';
import { PokemonFilterComponent } from './pokemon-filter/pokemon-filter.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokeCardComponent } from './pokemon/poke-card.component';
import { PokemonProfileComponent } from './profile/pokemon-profile.component';

@NgModule({
  declarations: [
    PokedexListComponent,
    PokeCardComponent,
    PokemonFilterComponent,
    PokemonProfileComponent,
    PokemonChartComponent,
    PokemonEvolutionComponent
  ],
  imports: [CommonModule, FormsModule, PokemonRoutingModule],
  exports: [],
})
export class PokemonModule {}
