import { Text, View } from "react-native";
import { useFonts } from "expo-font";

function App() {
  const [loaded] = useFonts({
    AvenirBook: require("./assets/fonts/AvenirBook.ttf"),
    AvenirHeavy: require("./assets/fonts/AvenirHeavy.ttf"),
    AvenirMedium: require("./assets/fonts/AvenirMedium.ttf"),
    AvenirRoman: require("./assets/fonts/AvenirRoman.ttf"),
    HisyamFacelift: require("./assets/fonts/HisyamFacelift.otf"),
    ProductSans: require("./assets/fonts/ProductSans.ttf"),
    SFProSemibold: require("./assets/fonts/SFProSemibold.ttf"),
  });

  if (!loaded) return null;

  return (
    <View>
      <Text style={{ fontFamily: "HisyamFacelift" }}>
        Open up App.js to start working on your app!
      </Text>
    </View>
  );
}

export default App;
