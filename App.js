import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Restro Finder</Text>
      <StatusBar style="dark"
       backgroundColor="#512DA8ae"
       hideTransitionAnimation="slide"
       animated={true}
      //  hidden={true} 
      networkActivityIndicatorVisible={true}
      // translucent={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
