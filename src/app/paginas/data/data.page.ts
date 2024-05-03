import { Component, Input, OnInit } from '@angular/core';
import { consumirapiService } from 'src/app/services/consumirapi.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {

  @Input() idPokemon!:string; 
  pokemon:any;

  constructor(public consumirapiService: consumirapiService) {
  }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(): void {
    this.consumirapiService.getPokemon<any>(this.idPokemon).subscribe((data) => {
      this.pokemon = data;
      console.log(data);
    });
  }

  capitalize(cad: string){
    return cad.charAt(0).toUpperCase() + cad.slice(1, cad.length);
  }

}