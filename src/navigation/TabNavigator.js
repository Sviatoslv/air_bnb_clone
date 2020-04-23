import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screenOptions, tabBarOptions } from "./tabOptions";
import { Profile } from '../screens/Profile';
import { Saved } from '../screens/Saved';
import { Inbox } from '../screens/Inbox';
import { ExploreScreen } from '../screens/Explore';
import { Trips } from '../screens/Trips';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => (
  <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{ tabBarLabel: "EXPLORE" }}
    />

    <Tab.Screen
      name="Saved"
      component={Saved}
      options={{ tabBarLabel: "SAVED" }}
    />

    <Tab.Screen
      name="Trips"
      component={Trips}
      options={{ tabBarLabel: "TRIPS" }}
    />

    <Tab.Screen
      name="Indox"
      component={Inbox}
      options={{ tabBarLabel: "INBOX" }}
    />

    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{ tabBarLabel: "PROFILE" }}
    />
  </Tab.Navigator>
);
