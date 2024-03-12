import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Cajitas con información */}
        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={styles.boxTitle}>Info Usuario</Text>
            <Text style = {styles.boxSubTitle}>Consulta la información disponible para el usuario</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxTitle}>Tarifas</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxTitle}>Bus</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxTitle}>Dónde estoy</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxTitle}>Líneas de bus</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxTitle}>Avisos de servicio</Text>
          </View>
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
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
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
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },
  boxImage: {
    width: "50%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  boxTitle: {
    color: "#000", // Cambiar color de texto para que sea visible
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  boxSubTitle: {
    color: "#696969",
    fontWeight: "bold",
    fontSize: 15, 
    textAlign: "center",
  },
});

export default HomeScreen;
