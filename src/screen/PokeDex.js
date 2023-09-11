import React, { useEffect, useState } from "react";
import { Text, SafeAreaView } from "react-native";
import { getPokesApi, getPokesDetailByApi } from "../api/pokemon.js";
import PokeList from "../components/PokeList.js";

export default function PokeDex() {
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    loadPokes();
  }, []);

  const loadPokes = async () => {
    try {
      const pokeResponse = await getPokesApi();

      const pokesDetails = await Promise.all(
        pokeResponse.results.map(async (poke) => {
          const getDetails = await getPokesDetailByApi(poke.url);
          return {
            id: getDetails.id,
            name: getDetails.name,
            order: getDetails.order,
            types: {
              type_1: getDetails.types[0].type.name,
              type_2: getDetails.types[1]?.type.name,
            },
            image: getDetails.sprites.other.home.front_default,
          };
        })
      );
      setPokes([...pokes, ...pokesDetails]);

      console.log(pokes);
      console.log(
        "-------------------------------------------------------------"
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView>
      <PokeList pokes={pokes} />
    </SafeAreaView>
  );
}
