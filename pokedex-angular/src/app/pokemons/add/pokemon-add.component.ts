import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pokemon } from 'src/app/utils/types';

@Component({
  selector: 'app-pokemon-add',
  templateUrl: './pokemon-add.component.html',
  styleUrls: ['./pokemon-add.component.scss'],
})
export class PokemonAddComponent {
  profileForm = new FormGroup({
    pokemonName: new FormControl(''),
    pokemonDescription: new FormControl(''),
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PokemonAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pokemon
  ) {}

  onSubmit() {
    console.log('New Pokemon added', this.profileForm.value);
  }
  onClose() {
    this.dialogRef.close();
  }
}
