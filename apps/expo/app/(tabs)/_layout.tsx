import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "../../components/navigation/TabBarIcon";
import { Colors } from "../../constants/Colors";
import { useColorScheme } from "../../hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              name={focused ? "home" : "home-outline"}
            />
          ),
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              name={focused ? "code-slash" : "code-slash-outline"}
            />
          ),
          title: "Explore",
        }}
      />
      <Tabs.Screen
        name="test"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              name={focused ? "cube" : "cube-outline"}
            />
          ),
          title: "Test",
        }}
      />
    </Tabs>
  );
}
