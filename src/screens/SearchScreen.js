import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import SearchBar from "../components/SearchBar";
import { StatusBar } from "expo-status-bar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";
import { ScrollView } from "react-native-gesture-handler";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [searchAPI, results, error] = useResults();

  const filterResults = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  const filterResultsOthers = (price) => {
    return results.filter((result) => {
      return !("price" in result);
    });
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#448AFFCF"></StatusBar>
      <SearchBar
        query={query}
        onQueryChange={(newQuery) => setQuery(newQuery)}
        search={() => searchAPI(query)}
      />
      <View style={styles.resultContainer}>
        {error ? <Text>{error}</Text> : null}
        <Text>We found {results.length} results</Text>
        <ResultList results={filterResults("$")} title="Wallet Friendly 🤑" />
        <ResultList results={filterResults("$$")} title="Expensive 💰" />
        <ResultList results={filterResults("$$$")} title="Luxury 💸" />
        <ResultList results={filterResultsOthers("$$$$")} title="Other Places 🏚 " />
        {/* <ResultList results={filterResults('$$$$')} title="Luxury 💸" /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    flex: 1,
  },
  resultContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
