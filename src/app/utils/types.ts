export type Pokemon = {
  id: number;
  name: string;
  image: string;
  color: string;
};

export type PokemonDetailsApi = {
  name: string;
  url: string;
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
  color: string;
  image: string;
  description: any[];
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
  color: PokemonDetailsApi;
  egg_groups: [];
  evolution_chain: {url: string} | null;
  evolves_from_species: PokemonDetailsApi | null;
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

export interface PokemonSpeciesImage extends PokemonSpecies {
  image?: string
}

export type FlavorText = {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version: {};
};

export type PokemonGeneration = {
  abilities: unknown[]
  id: number
  main_region: unknown
  moves: unknown[]
  name: string
  pokemon_species: PokemonDetailsApi[]
  types: unknown[]
  version_groups: unknown[]
}

export type PokemonEvolution = {
  baby_trigger_item: unknown
  chain: PokemonEvolutionChain
  id: number
}

export type PokemonEvolutionChain = {
  evolution_details: any[]
  evolves_to: PokemonEvolutionChain[]
  is_baby: boolean
  species: PokemonDetailsApi
}
