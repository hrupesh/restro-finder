import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import SearchBar from "../components/SearchBar";
import { StatusBar } from "expo-status-bar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [searchAPI, results, error] = useResults();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#448AFFCF"></StatusBar>
      <SearchBar
        query={query}
        onQueryChange={(newQuery) => setQuery(newQuery)}
        search={() => searchAPI(query)}
      />
      <View style={styles.resultContainer}>
        {error ? <Text>{error}</Text> : null}
        <Text>We found {results.length} results</Text>
        <ResultList  title="Wallet Friendly 🤑" />
        <ResultList  title="Expensive 💰"/>
        <ResultList  title="Luxury 💸"/>
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
