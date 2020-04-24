import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { shadow, COLORS } from "../constants";

export const SearchInput = () => (
  <View style={styles.container}>
    <Ionicons name="ios-search" size={18} style={styles.searchIcon} />
    <TextInput placeholder="Try to find something" style={styles.input} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    ...shadow,
  },
  searchIcon: {
    padding: 10,
    color: COLORS.ACCENT,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    color: "#424242",
  },
});
