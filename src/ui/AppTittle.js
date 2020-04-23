import React from "react";
import { StyleSheet, Text } from "react-native";

export const AppTittle = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
  },
});
