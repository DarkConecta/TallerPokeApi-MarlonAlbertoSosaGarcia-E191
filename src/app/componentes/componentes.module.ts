import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { IonicModule } from '@ionic/angular';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ListaPokemonComponent } from './listapokemon/lista-pokemon.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';

@NgModule({
  declarations: [
    EncabezadoComponent,
    SearchComponent,
    ListaPokemonComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    EncabezadoComponent,
    SearchComponent,
    ListaPokemonComponent,
    PokemonComponent
  ],
})
export class ComponentesModule { }