import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import SearchBar from "../components/SearchBar";
import { StatusBar } from "expo-status-bar";
import yelp from "../api/yelp";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchAPI = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term: query,
        location: "New York",
      },
    });
    setResults(response.data.businesses);
    console.log(results);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#448AFFCF"></StatusBar>
      <SearchBar
        query={query}
        onQueryChange={(newQuery) => setQuery(newQuery)}
      />
      <Button title="Hit Api" onPress={() => searchAPI()} />
      <View style={styles.resultContainer}>
        <Text>
          We found {results.length} results for{" "}
          {query.length > 0 ? query : "Ghost Restro's 👻 "}
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
