// DrawerNavigator.js
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainStackNavigator } from "./StackNavigator";

// Screens
import DetailsScreen from "../screens/DetailsScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ drawerHeaderShown }) => {
  
  return (
   
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: drawerHeaderShown,
        headerStyle: {
          backgroundColor: "#009AF0", // Cambiar el color de fondo de la barra de navegación
        },
        headerTintColor: "#fff", // Cambiar el color del texto de la barra de navegación
        headerTitleAlign: "center", // Centrar el texto en el header
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 35,
        },

        headerTitle: "Puerto Bus", // Título global para todos los screens del Drawer Navigator
      }}
    >
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
