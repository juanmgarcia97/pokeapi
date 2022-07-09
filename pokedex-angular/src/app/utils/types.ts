export type Pokemon = {
  id: number;
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
  stats: Stat[];
  types: any[];
  weight: number;
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type PokemonSpecies = {
  base_happiness: any;
  capture_rate: any;
  color: {};
  egg_groups: [];
  evolution_chain: any;
  evolves_from_species: any;
  flavor_text_entries: FlavorText[];
  form_descriptions: [];
  forms_switchable: boolean;
  gender_rate: number;
  genera: [];
  generation: {};
  growth_rate: {};
  habitat: any;
  has_gender_differences: boolean;
  hatch_counter: any;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  order: number;
  pal_park_encounters: [];
  pokedex_numbers: [];
  shape: {};
  varieties: [];
};

export type FlavorText = {
  flavor_text: string;
  language: {};
  version: {};
};
