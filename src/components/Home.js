import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Rating } from "react-native-ratings";
import { COLORS } from "../constants";

export const Home = ({ imgUri, title, description, price }) => (
  <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.8}>
      <Image source={{ uri: imgUri }} style={styles.image} />

      <View style={styles.textContatiner}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
        <Rating
          ratingCount={5}
          imageSize={12}
          readonly={true}
          startingValue={4}
          style={styles.rating}
        />
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "48%",
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 100,
  },
  textContatiner: {
    padding: 10,
  },
  title: {
    fontSize: 10,
    color: COLORS.ACCENT,
    textTransform: "uppercase",
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 12,
    color: "#777",
    marginBottom: 5,
  },
  rating: {
    flexDirection: "row",
  },
});
