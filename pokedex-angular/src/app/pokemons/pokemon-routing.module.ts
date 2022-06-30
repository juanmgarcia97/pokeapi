import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokemonProfileComponent } from './profile/pokemon-profile.component';

const routes: Routes = [
  {
    path: 'pokedex',
    component: PokedexListComponent,
  },
  {
    path: 'pokedex/:id',
    component: PokemonProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
