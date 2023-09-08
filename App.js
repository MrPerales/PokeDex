import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTab from "./src/navigation/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTab></NavigationTab>
    </NavigationContainer>
  );
}
