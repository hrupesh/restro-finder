import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { StatusBar } from "expo-status-bar";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [resutls, setResults] = useState([]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#448AFFCF"></StatusBar>
      <SearchBar
        query={query}
        onQueryChange={(newQuery) => setQuery(newQuery)}
      />
      <View style={styles.resultContainer}>
        <Text>
          We found {resutls.length} results for { query.length > 0 ? query : "Ghost Restro's 👻 " }
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    flex: 1,
  },
  resultContainer: {
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
});
