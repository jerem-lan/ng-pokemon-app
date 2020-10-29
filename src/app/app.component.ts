import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
  
@Component({
  selector: 'pokemon-app',
  template: `<h1>Pokemons !!</h1>`,
})
export class AppComponent implements OnInit { 

  private pokemons: Pokemon[] = null;

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    alert("vous avez selectionné " + pokemon.name);
  }

}
