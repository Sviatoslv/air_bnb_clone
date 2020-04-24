import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";

export const Tag = ({ name }) => (
  <TouchableOpacity activeOpacity={0.5}>
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    minHeight: 20,
    minWidth: 40,
    marginRight: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 2,
    backgroundColor: "#fff",
  },
  text: {
    backgroundColor: "#fff",
  },
});
