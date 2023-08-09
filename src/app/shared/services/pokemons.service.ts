import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private readonly _pokemonEndPoint : string ="https://pokeapi.co/api/v2/pokemon"
  

  constructor(private _httpClient : HttpClient) { } // penser à faire ctrl + espace pour HttpClient et ac


  get () {

  }

  
}