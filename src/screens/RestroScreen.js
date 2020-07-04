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

  if (!result || !photos) {
    return (
      <Image
        style={styles.loader}
        source={{
          uri:
            "https://media2.giphy.com/media/11FuEnXyGsXFba/giphy.gif?cid=ecf05e47b44bdaa29169be7e7946c6d20e0efd915d2aed95&rid=giphy.gif",
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> {result.name}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <Image
              resizeMode="contain"
              source={{
                uri: item
                  ? item
                  : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png",
              }}
              style={styles.img}
            />
          );
        }}
      />
      {/* <ScrollView
        style={styles.scrollcontainer}
        // horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollToOverflowEnabled
      >
        <Image
          resizeMode="contain"
          source={{
            uri: photos[0]
              ? photos[0]
              : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png",
          }}
          style={styles.img}
        />
        <Image
          resizeMode="contain"
          source={{
            uri: photos[1]
              ? photos[1]
              : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png",
          }}
          style={styles.img}
        />
        <Image
          resizeMode="contain"
          source={{
            uri: photos[2]
              ? photos[2]
              : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png",
          }}
          style={styles.img}
        />
      </ScrollView> */}
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
    width: 400,
    // marginVertical: 20,
    borderRadius: 5,
  },
  scrollcontainer: {
    height: 600,
    width: "100%",
  },
  loader: {
    flex: 1,
    height: "100%",
    width: "100%",
    // marginVertical: "50%",
    alignSelf: "center",
  },
});
