import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


// Icons
import FontistoIcon from "react-native-vector-icons/Fontisto";
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

const HomeScreen = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.row}>
          <Pressable
            style={({ pressed }) => [
              { opacity: pressed ? 0.5 : 1.0 },
              styles.box
            ]}
            onPress={() => navigateToScreen("InfoUsuarioScreen")}
          >
            <View style={styles.Iconcircle}>
              <FontistoIcon name="info" size={33} color="#009AF0" />
            </View>
            <Text style={styles.boxTitle}>Info Usuario</Text>
            <Text style={styles.boxSubTitle}>
              Consulta la información disponible para el usuario
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              { opacity: pressed ? 0.5 : 1.0 },
              styles.box
            ]}
            onPress={() => navigateToScreen("TarifasScreen")}
          >
            <View style={styles.Iconcircle}>
              <FontistoIcon name="ticket" size={33} color="#009AF0" />
            </View>
            <Text style={styles.boxTitle}>Tarifas</Text>
            <Text style={styles.boxSubTitle}>
              Consulta los precios de las tarifas disponibles
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              { opacity: pressed ? 0.5 : 1.0 },
              styles.box
            ]}
            onPress={() => navigateToScreen("BusScreen")}
          >
            <View style={styles.Iconcircle}>
              <FontistoIcon name="bus" size={33} color="#009AF0" />
            </View>
            <Text style={styles.boxTitle}>Bus</Text>
            <Text style={styles.boxSubTitle}>
              Busca las paradas que necesites y accede a la información
              disponible
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              { opacity: pressed ? 0.5 : 1.0 },
              styles.box
            ]}
            onPress={() => navigateToScreen("DondeEstoyScreen")}
          >
            <View style={styles.Iconcircle}>
              <FontAwesome6Icon
                name="location-crosshairs"
                size={33}
                color="#009AF0"
              />
            </View>
            <Text style={styles.boxTitle}>Dónde estoy</Text>
            <Text style={styles.boxSubTitle}>
              Te mostraremos las paradas mas cercanas
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              { opacity: pressed ? 0.5 : 1.0 },
              styles.box
            ]}
            onPress={() => navigateToScreen("LineasBusScreen")}
          >
            <View style={styles.Iconcircle}>
              <MaterialCommunityIconsIcon
                name="bus-stop"
                size={33}
                color="#009AF0"
              />
            </View>
            <Text style={styles.boxTitle}>Líneas de bus</Text>
            <Text style={styles.boxSubTitle}>
              Líneas de bus con sus horarios y paradas
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              { opacity: pressed ? 0.5 : 1.0 },
              styles.box
            ]}
            onPress={() => navigateToScreen("AvisosScreen")}
          >
            <View style={styles.Iconcircle}>
              <MaterialCommunityIconsIcon
                name="bell-alert"
                size={33}
                color="#009AF0"
              />
            </View>
            <Text style={styles.boxTitle}>Avisos de servicio</Text>
            <Text style={styles.boxSubTitle}>
              Afectaciones en el servicio y recomendaciones
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  Iconcircle: {
    width: 60,
    height: 60,
    borderRadius: 30, // Para hacer el contenedor circular
    backgroundColor: "#E6E1DB", // Color gris
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingVertical:10,
    margin:10,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // Espacio entre las cajas
    width: windowWidth - 20, // Ancho igual al ancho de la pantalla menos el padding
    marginTop: 10,
  },
  box: {
    width: "47%", // Ancho de cada cajita
    height: 230,
    backgroundColor: "#FFFF",
    marginBottom: 20, // Espacio entre las cajas
    alignItems: "center",
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 15,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  boxTitle: {
    color: "#000", // Cambiar color de texto para que sea visible
    fontWeight: "bold",
    fontSize: RFPercentage(2.3),
    textAlign: "center",
  },
  boxSubTitle: {
    color: "#696969",
    fontWeight: "bold",
    fontSize: RFPercentage(2),
    textAlign: "center",
  },
});

export default HomeScreen;
