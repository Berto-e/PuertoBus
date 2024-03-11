import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Drawer } from "react-native-paper";
const Navbar = () => {
  
  return (
    
    <View style={styles.navbar}>
      <Text style={styles.navbarText}>Puerto Bus</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#009AF0", // Color de fondo de la barra de navegación
    height: 60 + StatusBar.currentHeight, // Altura de la barra de navegación con la altura de la barra de estado
    justifyContent: "center", // Alineación vertical al centro
    alignItems: "center", // Alineación horizontal al centro
    position: "absolute", // Posicionamiento absoluto
    top: 0, // Alinear en la parte superior de la pantalla
    left: 0, // Alinear a la izquierda de la pantalla
    right: 0, // Alinear a la derecha de la pantalla
    paddingTop: StatusBar.currentHeight, // Ajustar el relleno superior para evitar que el contenido se superponga con la barra de estado
  },
  navbarText: {
    color: "white", // Color del texto de la barra de navegación
    fontSize: 20, // Tamaño del texto de la barra de navegación
    fontWeight: "bold", // Peso del texto de la barra de navegación
  },
});

export default Navbar;
