import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import SearchBar from "../components/SearchBar";
import { StatusBar } from "expo-status-bar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";
import { ScrollView } from "react-native-gesture-handler";

export default function SearchScreen(props) {
  const [query, setQuery] = useState("");
  const [searchAPI, results, error] = useResults();

  console.log(props);
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
    <View style={styles.container}>
      <StatusBar backgroundColor="#448AFFCF"></StatusBar>
      <SearchBar
        query={query}
        onQueryChange={(newQuery) => setQuery(newQuery)}
        search={() => searchAPI(query)}
      />
      <ScrollView style={styles.resultContainer}>
        {error ? <Text>{error}</Text> : null}
        {results.length < 1 ? <Text>No results found!</Text> : null}
        {filterResults("$").length > 0 ? (
          <ResultList results={filterResults("$")} title="Wallet Friendly 🤑" />
        ) : null}
        {filterResults("$$").length > 0 ? (
          <ResultList results={filterResults("$$")} title="Expensive 💰" />
        ) : null}
        {filterResults("$$$").length > 0 ? (
          <ResultList results={filterResults("$$$")} title="Luxury 💸" />
        ) : null}
        {filterResultsOthers("$$$$").length > 0 ? (
          <ResultList
            results={filterResultsOthers("$$$$")}
            title="Other Places 🏚 "
          />
        ) : null}
        {/* <ResultList results={filterResults('$$$$')} title="Luxury 💸" /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
  },
  resultContainer: {
    // paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
  },
});
