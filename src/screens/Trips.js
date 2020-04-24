import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Trips = () => {
  return (
    <View style={styles.container}>
      <Text>Trips Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
