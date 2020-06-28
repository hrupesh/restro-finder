import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search" />
      <TouchableOpacity>
        <MaterialIcons
          style={styles.icon}
          name="search"
          size={40}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222",
    padding: 25,
    margin: 15,
    marginTop: 25,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
    color: "white",
    flexDirection: "row",
  },
  input: {
    color: "white",
    fontSize: 20,
    letterSpacing: 2,
    width: "100%",
  },
  icon: {
    // position:'absolute',
    // left:100
  },
});
