import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

export default function PokeList({ pokes }) {
  return (
    <FlatList
      data={pokes}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(poke) => String(poke.id)}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      contentContainerStyle={Style.flatListContentContainer}
    />
  );
}

const Style = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});
