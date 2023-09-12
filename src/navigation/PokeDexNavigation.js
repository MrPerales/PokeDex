import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import PokeDex from "../screen/PokeDex";
import Pokemon from "../screen/Pokemon";

const Stack = createNativeStackNavigator();

export default function PokeDexNavigation() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="PokeDex" component={PokeDex} options={{title:"" ,headerShown:false}} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}
