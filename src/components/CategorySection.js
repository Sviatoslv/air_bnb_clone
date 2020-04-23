import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { AppTittle } from "../ui/AppTittle";
import { DATA } from "../DATA";
import { Category } from "./Category";

export const CategorySection = () => (
  <View>
    <AppTittle>Start to Explore</AppTittle>

    <ScrollView
      horizontal={true}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
    >
      {DATA.map((category) => (
        <Category
          key={category.id}
          imgUri={category.url}
          name={category.name}
        />
      ))}
    </ScrollView>
  </View>
);
