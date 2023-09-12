import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import PokeCard from "./PokeCard";

export default function PokeList({ pokes }) {
  return (
    <FlatList
      data={pokes}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(poke) => String(poke.id)}
      renderItem={({ item }) => <PokeCard poke={item} />}
      contentContainerStyle={Style.flatListContentContainer}
    />
  );
}

const Style = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});
