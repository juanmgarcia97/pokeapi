import { Component, Inject, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pokemon-add',
  templateUrl: './pokemon-add.component.html',
  styleUrls: ['./pokemon-add.component.scss'],
})
export class PokemonAddComponent {
  profileForm = new FormGroup({
    pokemonName: new FormControl('', [Validators.required]),
    pokemonDescription: new FormControl('', [Validators.required]),
    pokemonColor: new FormControl('', [Validators.required]),
    pokemonImage: new FormControl('', [Validators.required])
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log('New Pokemon added', this.profileForm.value);
  }
}
