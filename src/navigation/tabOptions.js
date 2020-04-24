import React from "react";
import { Image } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { COLORS } from "../constants";

export const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    switch (route.name) {
      case "Explore":
        return <Ionicons name="ios-search" size={size} color={color} />;

      case "Saved":
        return <Ionicons name="ios-heart-empty" size={size} color={color} />;

      case "Trips":
        return (
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: size, height: size, tintColor: color }}
          />
        );

      case "Indox":
        return (
          <Image
            source={require("../../assets/chatbubbles-outline.png")}
            style={{ width: size, height: size, tintColor: color }}
          />
        );

      case "Profile":
        return (
          <Image
            source={require("../../assets/person-outline.png")}
            style={{ width: size, height: size, tintColor: color }}
          />
        );
      default:
        break;
    }
  },
});

export const tabBarOptions = {
  activeTintColor: COLORS.ACCENT,
  inactiveTintColor: "gray",
  style: {
    backgroundColor: "#fff",
    borderTopWidth: 0,
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 4.0,
    elevation: 5,
  },
};
