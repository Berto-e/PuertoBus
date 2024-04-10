import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";

const LineasBusScreen = () => {
  const lineas = [
    { numero: "L1", descripcion: "CENTRO COMERCIAL EL PASEO · ACUÑA", color: "#FF5733" },
    { numero: "L2", descripcion: "ACUÑA · CENTRO COMERCIAL EL PASEO", color: "#33FF57" },
    { numero: "L3", descripcion: "VALDELAGRANA · CENTRO · COSTA OESTE", color: "#5733FF" },
    { numero: "L4", descripcion: "URBALUZ · CENTRO · CREVILLET", color: "#FFFF33" },
    { numero: "L5", descripcion: "PB.DªBLANCA · CENTRO · HIJUELAS · P.LA ALHAJA", color: "#33FFFF" },
    { numero: "L6", descripcion: "PLAZA DE TOROS · FUENTEBRAVÍA", color: "#FF33FF" },
    { numero: "L7", descripcion: "SAN BARTOLOMÉ · LAS NIEVES · PINILLO CHICO", color: "#FF5733" },
  ];

  return (
    <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {lineas.map((linea, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [
              { opacity: pressed ? 0.5 : 1.0 },
              styles.pressable,
              { borderLeftColor: linea.color, borderLeftWidth: 5 }, // Franja de color a la izquierda
            ]}
          >
            <Text style={[styles.text, { color: linea.color, fontSize: RFPercentage(2.3) } ]}>{linea.numero}</Text>
            <Text style={styles.text}>{linea.descripcion}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    alignItems: "center",
  },
  pressable: {
    width: "90%",
    padding: 25,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    flexDirection: "row", // Alinea los elementos horizontalmente
    alignItems: "center", // Centra verticalmente los elementos
  },
  text: {
    fontSize: RFPercentage(1.8),
    marginLeft: 10, // Espacio entre el número de línea y la descripción
  },
});

export default LineasBusScreen;
