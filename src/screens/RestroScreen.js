import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import yelp from "../api/yelp";
import { FlatList, ScrollView } from "react-native-gesture-handler";

export default function RestroScreen({ navigation }) {
  //   console.log(props);
  const id = navigation.state.params.id;
  const [result, setResult] = useState(null);
  const [photos, setPhotos] = useState(null);

  const getResult = async (id) => {
    const res = await yelp.get(`/${id}`);
    setResult(res.data);
    console.log(result);
    setPhotos(res.data.photos);
    console.log(photos);
  };

  //   getResult(id);

  useEffect(() => {
    getResult(id);
  }, []);

  //   if (!result || !photos) {
  //     return null;
  //   }

  return (
    <View>
      {!result || !photos ? (
        <Text>Loading.......</Text>
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}> {result.name}</Text>
          <ScrollView
            style={styles.scrollcontainer}
            // horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scrollToOverflowEnabled
          >
            <Image source={{ uri: photos[0] }} style={styles.img} />
            <Image source={{ uri: photos[1] }} style={styles.img} />
            <Image source={{ uri: photos[2] }} style={styles.img} />
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 32,
    letterSpacing: 1,
    fontWeight: "400",
    textShadowColor: "#aaa",
    textShadowOffset: {
      width: 4,
      height: 2,
    },
    textShadowRadius: 5,
    marginVertical: 20,
  },
  img: {
    height: 600,
    width: "100%",
    marginVertical: 20,
    borderRadius: 10,
  },
  scrollcontainer: {
    height: 600,
    width: "100%",
  },
});
