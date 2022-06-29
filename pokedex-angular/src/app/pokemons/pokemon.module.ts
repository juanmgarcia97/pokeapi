import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokemonFilterComponent } from './pokemon-filter/pokemon-filter.component';
import { PokeCardComponent } from './pokemon/poke-card.component';

@NgModule({
  declarations: [
    PokedexListComponent,
    PokeCardComponent,
    PokemonFilterComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  exports: [PokedexListComponent, PokeCardComponent],
})
export class PokemonModule {}
