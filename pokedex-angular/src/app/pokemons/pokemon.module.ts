import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonAddComponent } from './add/pokemon-add.component';
import { PokemonEvolutionComponent } from './evolution/pokemon-evolution.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokemonChartComponent } from './pokemon-chart/pokemon-chart.component';
import { PokemonFilterComponent } from './pokemon-filter/pokemon-filter.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokeCardComponent } from './pokemon/poke-card.component';
import { PokemonProfileComponent } from './profile/pokemon-profile.component';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const materialDeclarations = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatGridListModule
];
@NgModule({
  declarations: [
    PokedexListComponent,
    PokeCardComponent,
    PokemonFilterComponent,
    PokemonProfileComponent,
    PokemonChartComponent,
    PokemonEvolutionComponent,
    PokemonAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule,
    ReactiveFormsModule,
    ...materialDeclarations,
    FontAwesomeModule
  ],
  exports: [],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
})
export class PokemonModule {}
