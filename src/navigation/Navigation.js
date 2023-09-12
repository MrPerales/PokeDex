import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import Account from "../screen/Account";
import Favorite from "../screen/Favorite";
import { Image } from "react-native";
import PokeDexNavigation from "./PokeDexNavigation";

const Tab = createBottomTabNavigator();
export default function NavigationTab() {
  return (
    <Tab.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          //   title: "Favoritooos",
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PokeDexNavigation"
        component={PokeDexNavigation}
        options={{
          title: "PokeDex",
          tabBarLabel: "",
          headerShown:false,
          tabBarIcon: () => renderPokeBall(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeBall() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{
        width: 55,
        height: 55,
        top: -15,
      }}
    />
  );
}
