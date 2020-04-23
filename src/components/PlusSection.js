import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { AppTittle } from "../ui/AppTittle";

const IMGURL = 'https://66.media.tumblr.com/2615eff892c242364b99870bd9d5a201/ca9b4ec0f4bb9af7-3b/s540x810/cf9f6cf221d629f906f06abf030acfbcb4156f80.jpg';

export const PlusSection = () => (
  <View style={styles.container}>
    <AppTittle>Introducing Airbnb Plus</AppTittle>
    <Text style={styles.text}>
      A new section of homes verified for quality and comfort
    </Text>
    <Image source={{uri: IMGURL}} style={styles.image}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  text: {
    fontWeight: '100',
    marginBottom: 10,
    color: '#777',
  },
  image: {
    width: '100%',
    height: 200,
  }
});
