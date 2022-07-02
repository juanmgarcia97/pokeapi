export type Pokemon = {
  id?: number;
  name: string;
  url: string;
  image: string;
  color: string;
};

export type PokemonApi = {
  abilities: unknown[];
  base_experience: number;
  forms: unknown[];
  game_indices: unknown[];
  height: number;
  id: number;
  held_items: unknown[];
  is_default: boolean;
  location_area_encounters: string;
  moves: unknown[];
  name: string;
  order: number;
  past_types: unknown[];
  species: unknown;
  sprites: unknown;
  stats: unknown[];
  types: unknown[];
  weight: number;
};
