import * as React from "react";
import { Button, View, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function NavBar() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#009AF0", // Cambiar el color de fondo de la barra de navegación
          },
          headerTintColor: "#fff", // Cambiar el color del texto de la barra de navegación
          headerTitleAlign: 'center', // Centrar el texto en el header
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: "Puerto Bus", // Título global para todos los screens del Drawer Navigator
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen
          name="Notifications"
          component={NotificationsScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
