import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Product from "./screens/Product";

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
    AvenirBook: require("./assets/fonts/AvenirBook.ttf"),
    AvenirHeavy: require("./assets/fonts/AvenirHeavy.ttf"),
    AvenirMedium: require("./assets/fonts/AvenirMedium.ttf"),
    AvenirRoman: require("./assets/fonts/AvenirRoman.ttf"),
    HisyamFacelift: require("./assets/fonts/HisyamFacelift.otf"),
    PrataRegular: require("./assets/fonts/PrataRegular.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
