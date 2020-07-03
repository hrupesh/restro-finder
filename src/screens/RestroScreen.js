import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RestroScreen({ navigation }) {
  //   console.log(props);
  const id = navigation.state.params.id;

  return (
    <View>
      <Text>This is Restro Screen!</Text>
      <Text>ID : {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
