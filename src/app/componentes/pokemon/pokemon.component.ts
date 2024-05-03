import { Component, Input, OnInit } from '@angular/core';
import { DataPage } from 'src/app/paginas/data/data.page';
import { consumirapiService } from '../../services/consumirapi.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {

  @Input() pokemon!: any;
  pageData = DataPage;
  sprite: string ="";

  constructor(public consumirapiService: consumirapiService) {
  }

  ngOnInit() {
    this.getSprite();
  }

  getSprite(){
    this.consumirapiService.getPokemon<any>(this.getId(this.pokemon.url)).subscribe((data) => {
      this.sprite = data.sprites.front_default ? data.sprites.front_default : "https://ionicframework.com/docs/img/demos/thumbnail.svg";
    });
  }

  capitalize(cad: string) {
    return cad.charAt(0).toUpperCase() + cad.slice(1, cad.length);
  }
  
  getId(cad: string) {
    const cadSliced = cad.split("/");
    return cadSliced[6];
  }

}