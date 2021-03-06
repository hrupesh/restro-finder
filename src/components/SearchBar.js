import React,{useState} from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SearchBar({ query, onQueryChange, search }) {

 const [localQuery, setlocalQuery] = useState(query);

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={query}
        onChangeText={(value) => onQueryChange(value)}
        style={styles.input}
        placeholder="Search"
      />
      <TouchableOpacity 
         onPress={() => search()}>
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
    backgroundColor: "#000",
    padding: 15,
    paddingHorizontal: 25,
    margin: 15,
    marginTop: 25,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 100,
    elevation: 10,
    color: "white",
    flexDirection: "row",
  },
  input: {
    color: "white",
    fontSize: 22,
    letterSpacing: 2,
    width: "90%",
  },
  icon: {
    // position:'absolute',
    // right:10
  },
});
