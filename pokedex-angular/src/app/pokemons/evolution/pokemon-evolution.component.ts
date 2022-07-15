import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonEvolutionChain, PokemonSpeciesImage } from 'src/app/utils/types';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-evolution',
  templateUrl: './pokemon-evolution.component.html',
  styleUrls: ['./pokemon-evolution.component.scss'],
})
export class PokemonEvolutionComponent implements OnInit {
  @Input() evolution!: PokemonSpeciesImage;
  pokemonEvolution!: PokemonEvolutionChain;
  evolutionsData: any = []
  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    if (this.evolution)
      this.pokemonService
        .getPokemonEvolutions(this.evolution.evolution_chain?.url ?? '')
        .subscribe((data) => {
          if (data) this.pokemonEvolution = data.chain;
          do {
            let evolutionDetails = this.pokemonEvolution['evolution_details'][0];
            const id = this.pokemonService.getPokemonIdByUrl(this.pokemonEvolution.species.url);
            this.evolutionsData.push({
              "id": id,
              "image": this.pokemonService.getPokemonImageUri(Number(id)),
              "species_name": this.pokemonEvolution.species.name,
              "min_level": !evolutionDetails ? 1 : evolutionDetails.min_level,
              "trigger_name": !evolutionDetails ? null : evolutionDetails.trigger.name,
            });
            this.pokemonEvolution = this.pokemonEvolution['evolves_to'][0];
          } while (!!this.pokemonEvolution && this.pokemonEvolution.hasOwnProperty('evolves_to'));
        });
  }

  goToPokemonProfile() {
    this.router.navigate([`/pokedex/${this.evolution.id}`])
  }
}
