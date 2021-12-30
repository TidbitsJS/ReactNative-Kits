import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Home from "./screens/Home";
import Recipe from "./screens/Recipe";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer theme={theme}>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Recipe" component={Recipe} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
