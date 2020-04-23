import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { CategorySection } from './CategorySection';
import { PlusSection } from './PlusSection';
import { HomesSection } from './HomesSection';

export const ExploreContent = () => {
  return (
    <ScrollView style={styles.container} scrollEventThrottle={16}>
      <CategorySection />
      <PlusSection />
      <HomesSection/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    marginBottom: 130,
  },
});
