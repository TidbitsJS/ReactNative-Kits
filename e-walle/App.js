import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { FONTS } from "./constants";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

function App() {
  const [loaded] = useFonts({
    AvenirNextBold: require("./assets/fonts/AvenirNextBold.otf"),
    AvenirNextDemi: require("./assets/fonts/AvenirNextDemi.otf"),
    AvenirNextMedium: require("./assets/fonts/AvenirNextMedium.otf"),
    AvenirNextRegular: require("./assets/fonts/AvenirNextRegular.otf"),
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
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
