import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// Screens

import InfoUsuarioScreen from "../screens/InfoUsuarioScreen";
import TarifasScreen from "../screens/TarifasScreen";
import BusScreen from "../screens/BusScreen";
import DondeEstoyScreen from "../screens/DondeEstoyScreen";
import AvisosScreen from "../screens/AvisosScreen";
import LineasBusScreen from "../screens/LineasBusScreen";
import HomeScreen from "../screens/HomeScreen";
import DrawerNavigator from "./DrawerNavigator";
import TarifasInfoScreen from "../screens/TarifasInfoScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="DrawerNavigator"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#009AF0", // Cambiar el color de fondo de la barra de navegación
        },
        headerTintColor: "#fff", // Cambiar el color del texto de la barra de navegación
        headerTitleAlign: "center", // Centrar el texto en el header
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: RFPercentage(2.3),
        },
         gestureEnabled: true, // Habilita los gestos para la transición
        ...TransitionPresets.SlideFromRightIOS, // Configura la animación de transición
      }}
    >
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="InfoUsuarioScreen" component={InfoUsuarioScreen} 
      options={{
        title: "Info Usuario",
      }}/>
      <Stack.Screen name="TarifasScreen" component={TarifasScreen} 
      options={{
        title: "Tarifas",
      }}/>
      <Stack.Screen name="BusScreen" component={BusScreen} 
      options={{
        title: "Bus",
      }}/>
      <Stack.Screen name="DondeEstoyScreen" component={DondeEstoyScreen} 
      options={{
        title: "Donde Estoy",
      }}/>
      <Stack.Screen name="LineasBusScreen" component={LineasBusScreen} 
      options={{
        title: "Lineas Bus",
      }}/>
      <Stack.Screen
        name="AvisosScreen"
        component={AvisosScreen}
        options={{
          title: "Avisos",
        }}
      />
      <Stack.Screen
        name="TarifasInfoScreen"
        component={TarifasInfoScreen}
        options={{
          title: "Tarifas Info",
        }}
      />
    </Stack.Navigator>
  );
};



export { MainStackNavigator };
