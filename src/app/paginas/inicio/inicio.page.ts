import { Component} from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage  {

  pokemon:string = "";

  constructor() { }



  pokemonBuscar($event: string) {
    this.pokemon = $event;
  }
}
