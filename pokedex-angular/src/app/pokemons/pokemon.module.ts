import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
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
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  exports: [PokedexListComponent, PokeCardComponent, PokemonRoutingModule],
})
export class PokemonModule {}
