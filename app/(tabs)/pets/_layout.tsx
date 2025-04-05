import { Stack } from "expo-router";
import { Pressable, Text } from "react-native";

type Params = {
  title?: string;
};

export default function PetLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "My Pets",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="pet"
        options={({ route }) => {
          const params = route.params as Params;
          return {
            headerLeft: () => (
              <Pressable>
                <Text>Cancel</Text>
              </Pressable>
            ),
            headerShown: true,
            headerTitle: (params?.title as string) || "Pet Details",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "bold",
            },
          };
        }}
      />
      <Stack.Screen
        name="medical"
        options={({ route }) => {
          const params = route.params as Params;
          return {
            headerLeft: () => (
              <Pressable>
                <Text>Cancel</Text>
              </Pressable>
            ),
            headerShown: true,
            headerTitle: (params?.title as string) || "Medical Details",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "bold",
            },
          };
        }}
      />
    </Stack>
  );
}
