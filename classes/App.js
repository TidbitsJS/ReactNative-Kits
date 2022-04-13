import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import { Tabs } from "./navigation";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Tabs"
      >
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
