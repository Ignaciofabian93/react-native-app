import React from "react";
import { Tabs } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { HapticTab } from "@/components/haptics/HapticTab";
// import { useBottomTabOverflow } from "@/components/tabBar/TabBarBackground";
import { Platform } from "react-native";
import { IconSymbol } from "@/components/icons/IconSymbol";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        // tabBarBackground: useBottomTabOverflow,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarActiveBackgroundColor: Colors.tertiary,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
            height: 50,
          },
          default: {
            height: 50,
            backgroundColor: Colors[colorScheme ?? "light"].background,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => <IconSymbol size={28} name="house.fill" color={Colors[colorScheme ?? "light"].tint} />,
        }}
      />
      <Tabs.Screen
        name="notes"
        options={{
          title: "Notes",
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
          },
          tabBarIcon: () => (
            <IconSymbol size={28} name="book.closed.fill" color={Colors[colorScheme ?? "light"].tint} />
          ),
        }}
      />
      <Tabs.Screen
        name="pets"
        options={{
          title: "My Pets",
          tabBarIcon: () => <IconSymbol size={28} name="pawprint.fill" color={Colors[colorScheme ?? "light"].tint} />,
        }}
      />
    </Tabs>
  );
}
