import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

// Screens
import HomeScreen from "../screens/HomeScreen";
import InfoUsuarioScreen from "../screens/InfoUsuarioScreen";
import TarifasScreen from "../screens/TarifasScreen";
import BusScreen from "../screens/BusScreen";
import DondeEstoyScreen from "../screens/DondeEstoyScreen";
import AvisosScreen from "../screens/AvisosScreen";
import LineasBusScreen from "../screens/LineasBusScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#009AF0", // Cambiar el color de fondo de la barra de navegación
        },
        headerTintColor: "#fff", // Cambiar el color del texto de la barra de navegación
        headerTitleAlign: "center", // Centrar el texto en el header
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
        gestureEnabled: true, // Habilita los gestos para la transición
        ...TransitionPresets.SlideFromRightIOS, // Configura la animación de transición
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
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
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
