import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Rating(props) {
  // console.log(props);
  var star = <AntDesign name="star" size={20} color="#212121" />;

  if (props.rating == 5) {
    star = (
      <Text>
        <AntDesign sty name="star" size={20} color="#fff" />
        <AntDesign name="star" size={20} color="#fff" />
        <AntDesign name="star" size={20} color="#fff" />
        <AntDesign name="star" size={20} color="#fff" />
        <AntDesign name="star" size={20} color="#fff" />
      </Text>
    );
  } else if (props.rating == 4) {
    star = (
      <Text>
        <AntDesign name="star" size={20} color="#fff" />
        <AntDesign name="star" size={20} color="#fff" />
        <AntDesign name="star" size={20} color="#fff" />
        <AntDesign name="star" size={20} color="#fff" />
        <AntDesign name="staro" size={20} color="#fff" />
      </Text>
    );
  } else if (props.rating == 3) {
    star = (
      <Text>
        <AntDesign name="star" size={20} color="#fff" />
        <AntDesign name="star" size={20} color="#fff" />
        <AntDesign name="star" size={20} color="#fff" />
        <AntDesign name="staro" size={20} color="#fff" />
        <AntDesign name="staro" size={20} color="#fff" />
      </Text>
    );
  } else if (props.rating == 2) {
    star = (
      <Text>
        <AntDesign name="star" size={20} color="#fff" />
        <AntDesign name="star" size={20} color="#fff" />
        <AntDesign name="staro" size={20} color="#fff" />
        <AntDesign name="staro" size={20} color="#fff" />
        <AntDesign name="staro" size={20} color="#fff" />
      </Text>
    );
  } else if (props.rating == 1) {
    star = (
      <Text>
        <AntDesign name="star" size={20} color="#fff" />
        <AntDesign name="staro" size={20} color="#fff" />
        <AntDesign name="staro" size={20} color="#fff" />
        <AntDesign name="staro" size={20} color="#fff" />
        <AntDesign name="staro" size={20} color="#fff" />
      </Text>
    );
  } else {
    star = (
      <Text>
        <AntDesign name="staro" size={24} color="#1976D2" />
        <AntDesign name="staro" size={24} color="#1976D2" />
        <AntDesign name="staro" size={24} color="#1976D2" />
        <AntDesign name="staro" size={24} color="#1976D2" />
        <AntDesign name="staro" size={24} color="#1976D2" />
      </Text>
    );
  }

  return <Text style={styles.cardRating}>{star}</Text>;
}

const styles = StyleSheet.create({
  card: {
    width: "95%",
    height: 130,
    backgroundColor: "#2196f3",
    alignSelf: "flex-start",
    borderRadius: 50,
    marginVertical: 10,
    borderLeftWidth: 10,
    borderLeftColor: "#0d47a1",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 10,
  },
  img: {
    height: "100%",
    width: "35%",
    borderRadius: 5,
  },
  cardText: {
    width: "100%",
    fontSize: 22,
    fontFamily: "monospace",
    paddingHorizontal: 25,
    color: "white",
    fontWeight: "100",
    letterSpacing: 2,
    overflow: "hidden",
  },
  cardRating: {
    fontSize: 24,
    color: "white",
    padding: 10,
    margin: 10,
    // paddingHorizontal: 25,
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#0007",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
