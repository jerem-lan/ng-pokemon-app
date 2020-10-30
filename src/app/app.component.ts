import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
  
@Component({
  selector: 'pokemon-app',
  templateUrl: `./app.component.html`,
})
export class AppComponent implements OnInit { 

  pokemons: Pokemon[] = null;
  title: string = "Pokemons !";


  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    alert("vous avez selectionné " + pokemon.name);
  }

}
