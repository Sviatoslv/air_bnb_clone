import React from "react";
import { SafeAreaView, Animated } from "react-native";
import { ExploreHeader } from "../components/ExploreHeader";
import { ExploreContent } from "../components/ExploreContent";

export const ExploreScreen = () => {
  let scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView>
      <ExploreHeader scrollY={scrollY} />
      <ExploreContent scrollY={scrollY} />
    </SafeAreaView>
  );
};
