import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";

const LineasBusScreen = () => {
  return (
    <ScrollView style={{flexGrow:1}}
    showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 },
            styles.pressable,
          ]}
        >
          <Text style={styles.text}>
            L1 - CENTRO COMERCIAL EL PASEO · ACUÑA{" "}
          </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 },
            styles.pressable,
          ]}
        >
          <Text style={styles.text}>
            L2 -  ACUÑA · CENTRO COMERCIAL EL PASEO{" "}
          </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 },
            styles.pressable,
          ]}
        >
          <Text style={styles.text}>
            L3 - VALDELAGRANA · CENTRO · COSTA OESTE{" "}
          </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 },
            styles.pressable,
          ]}
        >
          <Text style={styles.text}>
            L4 - URBALUZ · CENTRO · CREVILLET{" "}
          </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 },
            styles.pressable,
          ]}
        >
          <Text style={styles.text}>
            L5 - PB.DªBLANCA · CENTRO · HIJUELAS · P.LA ALHAJA{" "}
          </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 },
            styles.pressable,
          ]}
        >
          <Text style={styles.text}>
            L6 - PLAZA DE TOROS · FUENTEBRAVÍA{" "}
          </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 },
            styles.pressable,
          ]}
        >
          <Text style={styles.text}>
            L7 - SAN BARTOLOMÉ · LAS NIEVES · PINILLO CHICO{" "}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingVertical:20,
    alignItems:"center",
    
  },
  pressable: {
    width:"90%",
    padding: 20,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    
  },
  text: {
  
    fontSize: RFPercentage(2),
  },
});
export default LineasBusScreen;
