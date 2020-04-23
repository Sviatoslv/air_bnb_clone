import React from "react";
import { SafeAreaView } from "react-native";
import { ExploreHeader } from "../components/ExploreHeader";
import { ExploreContent } from "../components/ExploreContent";

export const ExploreScreen = () => {
  return (
    <SafeAreaView>
      <ExploreHeader />
      <ExploreContent />
    </SafeAreaView>
  );
};
