import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";

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
          return <Text style={styles.item}>{item.name}</Text>;
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
  item:{
      fontSize:24,
      backgroundColor:'#512DA8',
      padding:10,
      marginHorizontal:10,
      color:'white',
      height:100,
      alignContent:'center',
      justifyContent:'center'
  }
});
