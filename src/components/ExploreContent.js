import React from "react";
import { StyleSheet, Animated } from "react-native";
import { CategorySection } from "./CategorySection";
import { PlusSection } from "./PlusSection";
import { HomesSection } from "./HomesSection";

export const ExploreContent = ({scrollY}) => {
  return (
    <Animated.ScrollView
      style={styles.container}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y:scrollY}}}],
        {},
        { useNativeDriver: true },
      )}
    >
      <CategorySection />
      <PlusSection />
      <HomesSection />
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    marginBottom: 100,
  },
});
