import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function Restro({ restro }) {
  const image = { uri: restro.image_url };
  return (
    <ImageBackground  source={image} style={styles.imgcontainer}>
      <Text style={styles.name}>Name is {restro.name}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgcontainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderWidth:5,
    borderColor:'red',
    // flex: 1,
    // resizeMode: "cover",
    justifyContent: "flex-end",
    height:160,
    width:270,
    padding:10,
    marginHorizontal:15,
    marginVertical:10,
    shadowColor:'#000',
    shadowOffset:{
        height:5,
        width:5
    },
    shadowOpacity:0.5,
    shadowRadius:10,
    elevation:2,
  },

});
