// DrawerNavigator.js
import * as React from "react";
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Pressable, Text } from "react-native";
import { TouchableOpacity } from "react-native";
// Screens
import HomeScreen from "../screens/HomeScreen";
import TarifasScreen from "../screens/TarifasScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerMenu {...props} />}
      initialRouteName="Home"
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
      <Drawer.Screen
      name = "Home"
      component={HomeScreen}>
      
      </Drawer.Screen>
      
    </Drawer.Navigator>
  );
};

const DrawerMenu = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
          navigation.navigate('TarifasScreen'); // Utiliza el nombre de la pantalla en lugar del nombre del componente
        }}
      >
        <Text>TarifasScreen</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};
export default DrawerNavigator;
