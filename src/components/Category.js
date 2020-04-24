import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

export const Category = ({ imgUri, name }) => (
  <TouchableOpacity activeOpacity={0.9}>
    <View style={styles.category}>
      <Image style={styles.image} source={{ uri: imgUri }} />
      <Text style={styles.text}>{name}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  category: {
    marginRight: 20,
    width: 130,
    height: 130,
  },
  image: {
    flex: 2,
  },
  text: {
    flex: 0.6,
    padding: 10,
    backgroundColor: "#fff",
  },
});
