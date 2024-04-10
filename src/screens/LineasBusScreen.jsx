import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";

const LineasBusScreen = () => {
  const lineas = [
    {
      numero: "L1",
      descripcion: "CENTRO COMERCIAL EL PASEO · ACUÑA",
      color: "#FF5733",
    },
    {
      numero: "L2",
      descripcion: "ACUÑA · CENTRO COMERCIAL EL PASEO",
      color: "#33FF57",
    },
    {
      numero: "L3",
      descripcion: "VALDELAGRANA · CENTRO · COSTA OESTE",
      color: "#5733FF",
    },
    {
      numero: "L4",
      descripcion: "URBALUZ · CENTRO · CREVILLET",
      color: "#FFFF33",
    },
    {
      numero: "L5",
      descripcion: "PB.DªBLANCA · CENTRO · HIJUELAS · P.LA ALHAJA",
      color: "#33FFFF",
    },
    {
      numero: "L6",
      descripcion: "PLAZA DE TOROS · FUENTEBRAVÍA",
      color: "#FF33FF",
    },
    {
      numero: "L7",
      descripcion: "SAN BARTOLOMÉ · LAS NIEVES · PINILLO CHICO",
      color: "#FF5733",
    },
  ];

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        {lineas.map((linea, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [
              { opacity: pressed ? 0.5 : 1.0 },
              styles.pressable,
            ]}
          >
            <View style={[styles.border, { backgroundColor: linea.color }]}>
              <Text
                style={[
                  styles.text,
                  { color: "#fff", fontSize: RFPercentage(2.3), textAlignVertical:"center" },
                ]}
              >
                {linea.numero}
              </Text>
            </View>
            <Text style={styles.text}>{linea.descripcion}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  border: {
    width: 60,
    height: RFPercentage(14),
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderTopLeftRadius:5,
  },
  pressable: {
    
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  text: {
    fontSize: RFPercentage(2.3),
    marginLeft: 10,
    flex: 1,
  },
});

export default LineasBusScreen;
