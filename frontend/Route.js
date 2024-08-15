import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import Home from "./Home";
import Destinos from "./Destinos";
import Contactos from "./Contactos";

const Tab = createBottomTabNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Destinos") {
              iconName = focused ? "rocket" : "rocket-outline";
            }else if (route.name === "Contactos") {
              iconName = focused ? "rocket" : "rocket-outline";
            }

            // Puedes devolver cualquier componente que quieras aquí, usualmente un <Icon /> de react-native-vector-icons
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: "#f8f8f8", paddingBottom: 5 },
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Destinos" component={Destinos} />
        <Tab.Screen name="Conatactos" component={Contactos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
