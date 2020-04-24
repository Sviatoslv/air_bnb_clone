import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Inbox = () => {
  return (
    <View style={styles.container}>
      <Text>Inbox Screen</Text>
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
