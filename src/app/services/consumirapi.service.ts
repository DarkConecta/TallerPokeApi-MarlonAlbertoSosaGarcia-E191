import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class consumirapiService {
  private url: string = "https://pokeapi.co/api/v2/pokemon/";

  constructor(public _http: HttpClient) {
  }

  getPokemons<T>() {
    const fullpath: string = `${this.url}?offset=0&limit=1032`;
    return this._http.get<T>(fullpath);
  }

  getPokemon<T>(id: string) {
    const fullpath: string = `${this.url}${id}`;
    return this._http.get<T>(fullpath);
  }
}