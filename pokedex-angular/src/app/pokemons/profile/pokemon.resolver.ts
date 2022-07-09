import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonApi } from 'src/app/utils/types';
import { PokemonService } from '../pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonResolver implements Resolve<PokemonApi> {
  constructor(private pokemonService: PokemonService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): PokemonApi | Observable<PokemonApi> | Promise<PokemonApi> {
    return this.pokemonService.getPokemonInformation(
      route.paramMap.get('id') || '1'
    );
  }
}
