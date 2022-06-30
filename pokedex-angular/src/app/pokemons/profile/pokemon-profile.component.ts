import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  // styleUrls: ['./pokemon-profile.component.scss'],
})
export class PokemonProfileComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
