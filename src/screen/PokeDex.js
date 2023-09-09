import { useEffect, useState } from "react";
import { Text, SafeAreaView } from "react-native";
import { getPokesApi } from "../api/pokemon";
export default function PokeDex() {
  const { data, setData } = useState([]);

  useEffect(() => {
    loadPokes();
  }, []);

  const loadPokes = async () => {
    try {
      const data = await getPokesApi();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView>
      <Text> POKEDEX</Text>
    </SafeAreaView>
  );
}
