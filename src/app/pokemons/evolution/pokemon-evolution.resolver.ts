import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { PokemonSpeciesImage } from 'src/app/utils/types';
import { PokemonService } from '../pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonEvolutionResolver implements Resolve<PokemonSpeciesImage> {
  constructor(private pokemonService: PokemonService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.pokemonService
      .getPokemonSpecies(route.paramMap.get('id') || '1')
      .pipe(
        map((data) => {
          return {
            ...data,
            image: this.pokemonService.getPokemonImageUri(data.id),
          };
        })
      );
  }
}
