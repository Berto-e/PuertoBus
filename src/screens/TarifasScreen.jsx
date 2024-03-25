import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  ScrollView,
} from "react-native";
import { Divider } from "react-native-paper";
import { RFPercentage } from "react-native-responsive-fontsize";

// Icons
import FontistoIcon from "react-native-vector-icons/Fontisto";
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

const TarifasScreen = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.containerSection}>
        <View style={{marginHorizontal:10}}>
        <Text style={styles.text}>Billete sencillo</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.price}>1,20€</Text>
        </View>
        </View>
      </View>
      <Divider style={{ marginVertical: 5, width: "100%" }} />
      <View style={styles.containerSection}>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 },
            styles.pressable,
          ]}
          onPress={() =>
            navigation.navigate("TarifasInfoScreen", {
              name: "bonoTarjetaOrdinario10Viajes",
            })
          }
        >
          <Text style={styles.text}>Bono-tarjeta Ordinario 10 viajes</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.price}>5,00€</Text>
            <FontAwesome6Icon name="circle-info" size={23} color={"black"} />
          </View>
        </Pressable>
      </View>

      <Divider style={{ marginVertical: 5, width: "100%" }} />

      <View style={styles.containerSection}>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 },
            styles.pressable,
          ]}
          onPress={() =>
            navigation.navigate("TarifasInfoScreen", {
              name: "bonoTarjetaJovenesPensionistas10Viajes",
            })
          }
        >
          <Text style={styles.text}>
            Bono-tarjeta Jóvenes y Pensionistas 10 viajes
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.price}>5,00€</Text>

            <FontAwesome6Icon name="circle-info" size={23} color={"black"} />
          </View>
        </Pressable>
      </View>
      <Divider style={{ marginVertical: 5, width: "100%" }} />
      <View style={styles.containerSection}>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 },
            styles.pressable,
          ]}
          onPress={() =>
            navigation.navigate("TarifasInfoScreen", {
              name: "bonoTarjeta30DiasOrdinario",
            })
          }
        >
          <Text style={styles.text}>Bono-tarjeta 30 días, Ordinario</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.price}>27,63€</Text>

            <FontAwesome6Icon name="circle-info" size={23} color={"black"} />
          </View>
        </Pressable>
      </View>
      <Divider style={{ marginVertical: 5, width: "100%" }} />
      <View style={styles.containerSection}>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 },
            styles.pressable,
          ]}
          onPress={() =>
            navigation.navigate("TarifasInfoScreen", {
              name: "bonoTarjeta30DiasJovenesPensionistas",
            })
          }
        >
          <Text style={styles.text}>
            Bono-tarjeta 30 días, Jóvenes y Pensionistas
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.price}>18,40€</Text>

            <FontAwesome6Icon name="circle-info" size={23} color={"black"} />
          </View>
        </Pressable>
      </View>
      <Divider style={{ marginVertical: 5, width: "100%" }} />
      <View style={styles.containerSection}>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 },
            styles.pressable,
          ]}
          onPress={() =>
            navigation.navigate("TarifasInfoScreen", {
              name: "bonoTarjetaFamiliar",
            })
          }
        >
          <Text style={styles.text}>Bono-tarjeta Familiar 10 viajes</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.price}>3,65€</Text>

            <FontAwesome6Icon name="circle-info" size={23} color={"black"} />
          </View>
        </Pressable>
      </View>
      <Divider style={{ marginVertical: 5, width: "100%" }} />
      <View style={styles.containerSection}>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 },
            styles.pressable,
          ]}
          onPress={() =>
            navigation.navigate("TarifasInfoScreen", {
              name: "bonoTarjetaFamiliar",
            })
          }
        >
          <Text style={styles.text}>Abono-tarjeta Familiar 30 días</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.price}>15,26€</Text>

            <FontAwesome6Icon name="circle-info" size={23} color={"black"} />
          </View>
        </Pressable>
      </View>
      <Divider style={{ marginVertical: 5, width: "100%" }} />
      <View style={styles.containerSection}>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 },
            styles.pressable,
          ]}
          onPress={() =>
            navigation.navigate("TarifasInfoScreen", {
              name: "transbordo",
            })
          }
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.text}>Transbordo</Text>

            <FontAwesome6Icon
              name="circle-info"
              size={23}
              color={"black"}
              style={{ marginHorizontal: 8 }}
            />
          </View>
        </Pressable>
      </View>
      <Divider style={{ marginVertical: 5, width: "100%" }} />
      <View style={styles.containerSection}>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0 },
            styles.pressable,
          ]}
          onPress={() =>
            navigation.navigate("TarifasInfoScreen", {
              name: "bonoTarjetaDorada",
            })
          }
        >
          <Text style={styles.text}>Bono-tarjeta Dorada</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.price}>gratuita</Text>

            <FontAwesome6Icon name="circle-info" size={23} color={"black"} />
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerSection: {
    padding: 10,
    alignItems: "flex-start",
   
  },
  text: {
    fontSize: RFPercentage(2.3),
  },
  price: {
    fontWeight: "bold",
    color: "#009AF0",
    fontSize: RFPercentage(2.6),
    marginRight: 10,
  },
  pressable: {
    marginHorizontal: 10,

    alignSelf: "stretch",
  },
});

export default TarifasScreen;
