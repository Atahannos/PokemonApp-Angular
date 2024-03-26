export class SimplifiedPokemon {
  name: string;
  abilities: string[];
  height: string;
  weight: string;
  moves: string[];

  constructor(data: any) {
    this.name = data.name;
    this.abilities = data.abilities.map((ability: any) => ability.ability.name);
    this.height = data.height;
    this.weight = data.weight;
    this.moves = data.moves.map((move: any) => move.move.name);
  }
}
