import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { StatusBar } from "expo-status-bar";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <StatusBar backgroundColor="#448AFF" ></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    flex: 1,
  },
});
