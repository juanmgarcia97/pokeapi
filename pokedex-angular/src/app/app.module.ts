import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { PokemonModule } from './pokemons/pokemon.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [PokemonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
