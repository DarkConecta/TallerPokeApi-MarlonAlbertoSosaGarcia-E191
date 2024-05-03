import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { consumirapiService } from 'src/app/services/consumirapi.service';

@Component({
  selector: 'app-listapokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.scss'],
})
export class ListaPokemonComponent implements OnInit, OnChanges {
  @Input() pokemonBuscado:string="";    
  pokemons: any[] = [];
  pokemonsRender: any[] = [];

  constructor(public consumirapiService: consumirapiService) {
  }

  ngOnInit() {
    this.getPokemones();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemonBuscado']) {
      const nuevoValor = changes['pokemonBuscado'].currentValue;
      const encontrados = this.getPokemonBuscado(nuevoValor);
      this.pokemonsRender = encontrados;
    }
  }

  getPokemones(): void {
    this.consumirapiService.getPokemons<any>().subscribe((data) => {
      this.pokemons.push(...data.results);
    });
  }

  getPokemonBuscado(value: string){
    if(value.trim() === ""){
      return this.pokemons;
    }
    const pokemonesMatch = this.pokemons.filter(el => el.name.includes(value));
    return pokemonesMatch;
  }

}