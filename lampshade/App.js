import { SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import Lamp from "./screen/Lamp";

export default function App() {
  const [loaded] = useFonts({
    "SFUIText-Regular": require("./assets/fonts/SFUIText-Regular.ttf"),
    "SFUIText-Medium": require("./assets/fonts/SFUIText-Medium.ttf"),
    "SFUIText-Heavy": require("./assets/fonts/SFUIText-Heavy.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <Lamp />
    </SafeAreaView>
  );
}
