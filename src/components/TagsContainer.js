import React from "react";
import { StyleSheet, Animated } from "react-native";
import { Tag } from "./Tag";
import { TAGDATA } from "../TAGDATA";
import {
  tagsContainerTopDistance,
  tagsContainerOpacity,
} from "../interpolations";
import { useInterpolation } from "../hooks/useInterpolation";

export const TagsContainer = ({ scrollY }) => {
  let animatedDistanceTop = useInterpolation(scrollY, tagsContainerTopDistance);
  let animatedTagsOpacity = useInterpolation(scrollY, tagsContainerOpacity);

  return (
    <Animated.ScrollView
      style={{
        ...styles.container,
        top: animatedDistanceTop,
        opacity: animatedTagsOpacity,
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {TAGDATA.map((tag) => (
        <Tag name={tag.name} key={tag.id} />
      ))}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    top: 10,
    position: "relative",
  },
});
