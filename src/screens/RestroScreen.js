import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RestroScreen({ id }) {
  return (
    <View>
      <Text>This is Restro Screen!</Text>
      <Text>{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
