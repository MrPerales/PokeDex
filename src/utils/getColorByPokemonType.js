import { POKEMON_TYPE_COLORS } from "./constants";

const getColorByPokemonType = (type1, type2) => {
  if (type1 && type2) {
   return [POKEMON_TYPE_COLORS[type1.toLowerCase()],POKEMON_TYPE_COLORS[type2.toLowerCase()]]
  }else if (type1){
    // :S
    return [POKEMON_TYPE_COLORS[type1.toLowerCase()],POKEMON_TYPE_COLORS[type1.toLowerCase()]]

  }
};
export default getColorByPokemonType;