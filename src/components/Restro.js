import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Rating from "./Rating";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

function Restro({ restro, navigation }) {
  const image = { uri: restro.image_url };
  //   console.log(navigation);
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Restro",{id:restro.id})}
      >
        <ImageBackground
          borderBottomLeftRadius={15}
          borderBottomRightRadius={15}
          borderTopLeftRadius={15}
          borderTopRightRadius={15}
          fadeDuration={0}
          // onProgress={() => alert("Loading.....")}
          source={image}
          style={styles.imgcontainer}
          // loadingIndicatorSource={{ url : 'https://media2.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif' }}
        >
          <Text style={styles.name}>{restro.name}</Text>
          <Rating
            style={styles.rating}
            rating={Math.round(restro.rating)}
            counts={restro.review_count}
          />
        </ImageBackground>
      </TouchableOpacity>
      {restro.review_count ? (
        <Text style={styles.review_count}>{restro.review_count} Reviews</Text>
      ) : (
        "Not Available ⛔"
      )}
      <Text style={styles.location}>{restro.location.city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imgcontainer: {
    // flex: 1,
    // resizeMode: "cover",
    justifyContent: "flex-end",
    height: 220,
    width: 330,
    padding: 20,
    marginRight: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  name: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 2,
    textShadowColor: "#000",
    textShadowOffset: {
      width: 2,
      height: 1,
    },
    textShadowRadius: 5,
  },
  rating: {
    backgroundColor: "#000",
  },
  location: {
    position: "absolute",
    bottom: 0,
    right: 35,
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: "bold",
    marginBottom: -6,
  },
  review_count: {
    fontSize: 12,
    letterSpacing: 2,
    fontWeight: "700",
    marginLeft: 10,
    marginVertical: 5,
  },
  phone: {
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: "600",
  },
});

export default withNavigation(Restro);
