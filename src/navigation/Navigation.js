import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../screen/Account";
import PokeDex from "../screen/PokeDex";
import Favorite from "../screen/Favorite";

const Tab = createBottomTabNavigator();
export default function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="PokeDex" component={PokeDex} />
      <Tab.Screen name="Favorite" component={Favorite} />
    </Tab.Navigator>
  );
}
