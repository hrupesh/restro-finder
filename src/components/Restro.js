import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Rating from "./Rating";
import { round } from "react-native-reanimated";

export default function Restro({ restro }) {
  const image = { uri: restro.image_url };
  return (
    <View style={{ marginHorizontal: 15 }}>
      <ImageBackground source={image} style={styles.imgcontainer}>
        <Text style={styles.name}>{restro.name}</Text>
        <Rating style={styles.rating} rating={Math.round(restro.rating)} counts={restro.review_count} />
      </ImageBackground>
      <Text style={styles.phone}>{restro.phone ? restro.phone : 'Not Available'}</Text>
      <Text style={styles.location}>{restro.location.city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imgcontainer: {
    // flex: 1,
    // resizeMode: "cover",
    justifyContent: "flex-end",
    height: 200,
    width: 300,
    padding: 20,
    marginHorizontal: 0,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 40,
  },
  name: {
    color: "white",
    fontSize: 18,
    letterSpacing: 2,
    textShadowColor: "#000",
    textShadowOffset: {
      width: 5,
      height: 1,
    },
    textShadowRadius: 5,
  },
  rating: {
    backgroundColor: "#000",
  },
  location:{
      position:'absolute',
      bottom:0,
      right:5,
      fontSize:20,
      letterSpacing:1,
      fontWeight:'bold'
  },
  phone:{
      fontSize:16,
      letterSpacing:0.5,
      fontWeight:"700"
  }
});
