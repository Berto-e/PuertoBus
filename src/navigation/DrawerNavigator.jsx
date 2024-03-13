// DrawerNavigator.js
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainStackNavigator } from "./StackNavigator";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// Screens
import DetailsScreen from "../screens/DetailsScreen";
import TarifasScreen from "../screens/TarifasScreen";
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  
  return (
   
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#009AF0", // Cambiar el color de fondo de la barra de navegación
        },
        headerTintColor: "#fff", // Cambiar el color del texto de la barra de navegación
        headerTitleAlign: "center", // Centrar el texto en el header
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: RFPercentage(2),
        },

        headerTitle: "Puerto Bus", // Título global para todos los screens del Drawer Navigator
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Tarifas" component={TarifasScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
