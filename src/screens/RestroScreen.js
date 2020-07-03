import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RestroScreen({ navigation }) {
  //   console.log(props);
  const id = navigation.state.params.id;

  const searchAPI = async (searchTerm) => {
    try {
      setResults([]);
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "New York",
        },
      });
      setResults(response.data.businesses);
      // console.log(results);
    } catch (e) {
      setError("Something went wrong 🥴");
    }
  };

  return (
    <View>
      <Text>This is Restro Screen!</Text>
      <Text>ID : {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
