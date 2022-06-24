import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokeCardComponent } from './pokemon/poke-card.component';

@NgModule({
  declarations: [PokedexListComponent, PokeCardComponent],
  imports: [BrowserModule, FormsModule],
  exports: [PokedexListComponent, PokeCardComponent],
})
export class PokemonModule {}
