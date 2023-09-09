import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import PokeDex from "../screen/PokeDex";
import Pokemon from "../screen/Pokemon";

const Stack = createNativeStackNavigator();

export default function PokeDexNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PokeDex" component={PokeDex} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}
