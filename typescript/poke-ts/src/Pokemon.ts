import axios from "axios";
/*

Pokemon class
  - one pokemon has name, id, types and moves
  

List of goals:
  - create a function to get all information of a pokemon from result of getSinglePokemon
  - get a List of types from a pokemon, assing to a variable called types
  - get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves should be aleatory
  - fill Moves with missing data from Types you can get the information from url of the move.
  - re-write decortator to get new pokemons Ids in PokemonTrainer class 
*/
export function getSinglePokemon(id: string | number) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

function getNewPokemons<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    listOfIds = Array.from({ length: 3 }, () => Math.floor(Math.random() * 898) + 1);
  }
}

type Move = {
  name: string;
  url: string;
  type?: string;
  damage?: number; // power
  powerPoints?: number; // pp
  accuracy?: number;
};

type Type = {
  name: string;
  url: string;
};

export class Pokemon {
  name: string = '';
  id: number = 0;
  moves: Move[] = [];
  types: Type[] = [];

  constructor(pokemonResult: any) {
    this.buildFieldsPokemon(pokemonResult);
  }

  buildFieldsPokemon(pokemon: any) {
    this.name = pokemon.name;
    this.id = pokemon.id;
    this.moves = this.getPokemonMoves(pokemon.moves);
    this.types = this.getPokemonTypes(pokemon.types);
    // this.fillMoveInformation(this.moves);
    Promise.all(this.moves.map(move => this.fillMoveInformation(move))).then(moves => this.moves = moves);
  }

  getPokemonMoves(moves: any[]): Move[] {
    const cleneadMoves: Move[] = []
    const movesSize = moves.length;
    let counter = 0
    while (counter < 4) {
      const randomNumber = Math.floor(Math.random() * movesSize);
      cleneadMoves.push(moves[randomNumber].move);
      counter++;
    }
    return cleneadMoves;
  }

  getPokemonTypes(types: any[]): Type[] {
    const cleanedTypes: Type[] = []
    types.forEach((type) => {
      cleanedTypes.push(type.type)
    });
    return cleanedTypes;
  }

  async fillMoveInformation(move: Move) {
    const result = await axios.get(move.url).then(res => res.data);
    const filledMove: Move = {
      ...move,
      type: result.type.name ?? '',
      damage: result.power ?? 0,
      accuracy: result.accuracy ?? 0,
      powerPoints: result.pp ?? 0,
    }
    return filledMove;
  }

  displayInfo() {
    console.log(`=========================`);
    console.log(`Id: ${this.id}`);
    console.log(`Name: ${this.name}`);
    this.types.forEach((type, index) => {
      console.log(`Type ${index + 1}: ${type.name}`);
    });
    this.moves.forEach((move, index) => {
      // console.log(`Move ${index + 1}: ${move.name}`);
      console.log(move);
    });
  }
}
@getNewPokemons
export class PokemonTrainer {
  name: string;
  pokemons: Pokemon[] = [];
  listOfIds: number[] = [];
  constructor(name: string) {
    this.name = name;
  }

  async getPokemons() {
    const listPokemons = this.listOfIds.map(id => getSinglePokemon(id));
    const results = await Promise.all(listPokemons)
    results.forEach(result => {
      this.pokemons.push(new Pokemon(result.data));
    });
  }

  async showTeam() {
    await this.getPokemons();
    console.log('Trainer:', this.name);
    this.pokemons.forEach(pokemon => {
      pokemon.displayInfo();
    });
  }
}
