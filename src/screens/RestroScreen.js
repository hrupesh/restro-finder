import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import yelp from "../api/yelp";

export default function RestroScreen({ navigation }) {
  //   console.log(props);
  const id = navigation.state.params.id;
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const res = await yelp.get(`/${id}`);
    setResult(res.data);
    console.log(result);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View>
      {result === null ? (
        <Image
          style={styles.loader}
          source={{
            uri:
              "https://i.ya-webdesign.com/images/transparent-welcome-gif-background-3.gif",
          }}
        />
      ) : (
        <View>
          <Text>This is Restro Screen!</Text>
          <Text>
            ID : {id} , Result : {result.name}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
