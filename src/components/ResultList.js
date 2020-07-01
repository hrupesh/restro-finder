import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import Restro from "./Restro";

export default function ResultList({ title, results }) {
  return (
    <View>
      <Text style={styles.title}>
        ({results.length}) {title}
      </Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Restro restro={item.name} />
        }}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  list:{
      margin:5,
      fontSize:24,
  },
});
