import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokemonsResolver } from './pokedex-list/pokemons.resolver';
import { PokemonProfileComponent } from './profile/pokemon-profile.component';
import { PokemonResolver } from './profile/pokemon.resolver';

const routes: Routes = [
  {
    path: '',
    component: PokedexListComponent,
    resolve: {
      pokemons: PokemonsResolver,
    },
  },
  {
    path: ':id',
    component: PokemonProfileComponent,
    resolve: {
      pokemon: PokemonResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
