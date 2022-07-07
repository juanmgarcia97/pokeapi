export type Pokemon = {
  id?: number;
  name: string;
  url: string;
  image: string;
  color: string;
};

export type PokemonApi = {
  abilities: any[];
  base_experience: number;
  forms: any[];
  game_indices: any[];
  height: number;
  id: number;
  held_items: any[];
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_types: any[];
  species: any;
  sprites: any;
  stats: any[];
  types: any[];
  weight: number;
};
