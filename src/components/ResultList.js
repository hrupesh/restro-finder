import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import Restro from "./Restro";

export default function ResultList({ title, results }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text  style={styles.length} >({results.length})</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Restro restro={item} />;
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
    // backgroundColor:'#ccc',
    // borderRadius:20,
    paddingHorizontal:20
  },
  list: {
    margin: 5,
    fontSize: 24,
  },
  length:{
    color:'black',
    fontSize:10,
    letterSpacing:4,
    textShadowColor:'#8BC34A',
    textShadowOffset:{
        width:5,
        height:1
    },
    textShadowRadius:5,
    // backgroundColor:'#ccc',
    paddingHorizontal:25
  }
});
