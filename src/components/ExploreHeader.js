import React from "react";
import { StyleSheet, Platform, StatusBar, Animated } from "react-native";
import { TagsContainer } from "./TagsContainer";
import { shadow } from "../constants";
import { SearchInput } from "./SearchInput";
import { headerHeight } from '../interpolations';
import { useInterpolation } from '../hooks/useInterpolation';

export const ExploreHeader = ({ scrollY }) => {
  let animatedHeaderHeight = useInterpolation(scrollY, headerHeight)

  return (
    <Animated.View
      style={{
        ...styles.container,
        paddingTop:
          Platform.OS === "android" ? 5 + StatusBar.currentHeight : 20,
        maxHeight: animatedHeaderHeight,
      }}
    >
      <SearchInput />
      <TagsContainer scrollY={scrollY} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    ...shadow,
  },
});
