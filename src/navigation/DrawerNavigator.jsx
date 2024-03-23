import * as React from "react";
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Pressable, StyleSheet, Text, View, Dimensions } from "react-native";

// Icons
import FontistoIcon from "react-native-vector-icons/Fontisto";
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

// Screens
import HomeScreen from "../screens/HomeScreen";
import { Divider } from "react-native-paper";

const Drawer = createDrawerNavigator();
const drawerWidth = Dimensions.get("window").width * 0.6; // Obtener el 75% del ancho de la ventana
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerMenu {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#009AF0",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: RFPercentage(2),
        },
        headerTitle: "Puerto Bus",
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

const DrawerMenu = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.drawerContainer}>
        <Pressable
          style={styles.pressableContainer}
          onPress={() => {
            navigation.toggleDrawer();
            navigation.navigate("InfoUsuarioScreen");
          }}
        >
          <View style={styles.iconContainer}>
            <FontistoIcon name="info" size={23} color="black" />
          </View>
          <Text style={styles.pressableMainText}>Atención al cliente</Text>
        </Pressable>
        <Pressable
          style={styles.pressableContainer}
          onPress={() => {
            navigation.toggleDrawer();
            navigation.navigate("InfoUsuarioScreen");
          }}
        >
          <View style={styles.iconContainer}>
            <FontAwesome6Icon name="share-nodes" size={23} color="black" />
          </View>
          <Text style={styles.pressableMainText}>Redes sociales</Text>
        </Pressable>
        <Pressable
          style={styles.pressableContainer}
          onPress={() => {
            navigation.toggleDrawer();
            navigation.navigate("TarifasScreen");
          }}
        >
          <View style={styles.iconContainer}>
            <FontistoIcon name="ticket" size={23} color="black" />
          </View>
          <Text style={styles.pressableMainText}>Billetes y tarifas</Text>
        </Pressable>
        <Pressable
          style={styles.pressableContainer}
          onPress={() => {
            navigation.toggleDrawer();
            navigation.navigate("InfoUsuarioScreen");
          }}
        >
          <View style={styles.iconContainer}>
            <FontistoIcon name="player-settings" size={23} color="black" />
          </View>
          <Text style={styles.pressableMainText}>Configuración</Text>
        </Pressable>
        <Divider style={{ width: "100%" }} />
        <Pressable
          style={styles.pressableContainer}
          onPress={() => {
            navigation.toggleDrawer();
            navigation.navigate("InfoUsuarioScreen");
          }}
        >
          <View style={styles.iconContainer}>
            <MaterialCommunityIconsIcon
              style={{ color: "#999999" }}
              name="cellphone"
              size={23}
              color="black"
            />
          </View>
          <Text style={styles.pressableSecondaryText}>
            ¿Qué te ofrece PuertoBus App?
          </Text>
        </Pressable>
        <Divider style={{ width: "100%" }} />
        <Pressable
          style={styles.pressableContainer}
          onPress={() => {
            navigation.toggleDrawer();
            navigation.navigate("InfoUsuarioScreen");
          }}
        >
          <Text style={styles.pressableSecondaryText}>
            Política de privacidad
          </Text>
        </Pressable>
        <Divider style={{ width: "100%" }} />
        <View style={styles.pressableContainer}>
          <Text style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: RFPercentage(1.7), fontWeight: "bold" }}>
              BusPuerto App
            </Text>
            <Text style={{ fontSize: RFPercentage(1.5) }}> Versión 0.0.1</Text>
          </Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    
    alignItems: "flex-start",
    flex: 1,
    padding: 0,
   
  },
  pressableContainer: {
    width:"100%",
    
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    flexWrap:"wrap",
  },
  iconContainer: {
    
    width: 30, // Ancho fijo del contenedor de icono
    alignItems: "left", // Alinear iconos al centro verticalmente
    marginLeft: 10,
  },
  pressableMainText: {
    fontSize: RFPercentage(1.7),
    fontWeight: "bold",
    marginLeft: 20, // Espacio entre icono y texto
  },
  pressableSecondaryText: {
    width: "70%",
    fontSize: RFPercentage(2),
    fontWeight: "bold",
    marginLeft: 20, // Espacio entre icono y texto
    color: "#999999",
  },
});

export default DrawerNavigator;
