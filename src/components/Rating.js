import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function ImgCard(props) {
  // console.log(props);
  var star = <AntDesign name="star" size={20} color="#212121" />;

  if (props.rating == 5) {
    star = (
      <Text>
        <AntDesign sty name="star" size={20} color="#FFFFFF" />
        <AntDesign name="star" size={20} color="#FFFFFF" />
        <AntDesign name="star" size={20} color="#FFFFFF" />
        <AntDesign name="star" size={20} color="#FFFFFF" />
        <AntDesign name="star" size={20} color="#FFFFFF" />
      </Text>
    );
  } else if (props.rating == 4) {
    star = (
      <Text>
        <AntDesign name="star" size={20} color="#FFFFFF" />
        <AntDesign name="star" size={20} color="#FFFFFF" />
        <AntDesign name="star" size={20} color="#FFFFFF" />
        <AntDesign name="star" size={20} color="#FFFFFF" />
        <AntDesign name="staro" size={20} color="#FFFFFF" />
      </Text>
    );
  } else if (props.rating == 3) {
    star = (
      <Text>
        <AntDesign name="star" size={20} color="#FFFFFF" />
        <AntDesign name="star" size={20} color="#FFFFFF" />
        <AntDesign name="star" size={20} color="#FFFFFF" />
        <AntDesign name="staro" size={20} color="#FFFFFF" />
        <AntDesign name="staro" size={20} color="#FFFFFF" />
      </Text>
    );
  } else if (props.rating == 2) {
    star = (
      <Text>
        <AntDesign name="star" size={20} color="#FFFFFF" />
        <AntDesign name="star" size={20} color="#FFFFFF" />
        <AntDesign name="staro" size={20} color="#FFFFFF" />
        <AntDesign name="staro" size={20} color="#FFFFFF" />
        <AntDesign name="staro" size={20} color="#FFFFFF" />
      </Text>
    );
  } else if (props.rating == 1) {
    star = (
      <Text>
        <AntDesign name="star" size={20} color="#FFFFFF" />
        <AntDesign name="staro" size={20} color="#FFFFFF" />
        <AntDesign name="staro" size={20} color="#FFFFFF" />
        <AntDesign name="staro" size={20} color="#FFFFFF" />
        <AntDesign name="staro" size={20} color="#FFFFFF" />
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

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card}>
      {/* <Feather name="image" size={75} color="white" /> */}
      <Image
        fadeDuration={100}
        style={styles.img}
        source={{ uri: props.imgurl }}
      />
      <View>
        <Text numberOfLines={1} style={styles.cardText}>
          {props.item}
        </Text>
        <Text style={styles.cardRating}>{star}</Text>
      </View>
    </TouchableOpacity>
  );
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
    fontSize: 20,
    color: "white",
    padding: 20,
    paddingHorizontal: 25,
  },
});
