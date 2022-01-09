import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { FONTS } from "./constants";

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
    AvenirBlack: require("./assets/fonts/AvenirBlack.otf"),
    AvenirBook: require("./assets/fonts/AvenirBook.otf"),
    AvenirRoman: require("./assets/fonts/AvenirRoman.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <Text style={{ ...FONTS.h1 }}>
        Open up App.js to start working on your app!
      </Text>
    </View>
  );
}

export default App;
