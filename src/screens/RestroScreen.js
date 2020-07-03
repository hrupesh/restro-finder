import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RestroScreen(props) {
  return (
    <View>
      <Text>This is Restro Screen!</Text>
      <Text>ID : {props}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
