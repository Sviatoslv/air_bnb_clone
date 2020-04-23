import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Platform,
  StatusBar,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";

export const ExploreHeader = () => {
  return (
    <View
      style={{
        ...styles.container,
        paddingTop:
          Platform.OS === "android" ? 10 + StatusBar.currentHeight : 20,
        paddingBottom:
          Platform.OS === "android" ? 40 : 20,
      }}
    >
      <View style={styles.inputContainer}>
        <Ionicons name="ios-search" size={18} style={styles.searchIcon} />
        <TextInput
          placeholder="Try to find something"
          style={styles.input}
        />
      </View>
    </View>
  )
};

const shadow = {
  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4.0,
  elevation: 2,
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    ...shadow,
  },
  inputContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    ...shadow,
  },
  searchIcon: {
    padding: 10,
    color: "tomato",
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    color: "#424242",
  },
});
