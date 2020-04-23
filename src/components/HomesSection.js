import React from "react";
import { StyleSheet, View } from "react-native";
import { AppTittle } from "../ui/AppTittle";
import { Home } from "./Home";
import { homeDATA } from '../homeData';

export const HomesSection = () => (
  <View style={styles.container}>
    <AppTittle>Homes Around The World</AppTittle>

    <View style={styles.homesContainer}>
      {homeDATA.map((home) => (
        <Home
          key={home.id}
          imgUri={home.img}
          title={home.title}
          description={home.description}
          price={home.price}
        />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginRight: 20,
  },
  homesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
