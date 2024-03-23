import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const TarifasInfoScreen = ({ route }) => {
  // Accede a la propiedad 'name' de route.params
  const { name } = route.params;

  // Objeto que mapea los nombres de las tarifas a las funciones de renderizado correspondientes
  const tarifasComponents = {
    bonoTarjetaOrdinario10Viajes: bonoTarjetaOrdinario10Viajes,
    bonoTarjetaJovenesPensionistas10Viajes:
      bonoTarjetaJovenesPensionistas10Viajes,
    bonoTarjeta30DiasOrdinario: bonoTarjeta30DiasOrdinario,
    bonoTarjeta30DiasJovenesPensionistas: bonoTarjeta30DiasJovenesPensionistas,
    bonoTarjetaFamiliar: bonoTarjetaFamiliar,
    transbordo: transbordo,
    bonoTarjetaDorada: bonoTarjetaDorada,
  };

  // Obtener la función de renderizado correspondiente al nombre de la tarifa
  const TarifaComponent = tarifasComponents[name];

  // Renderizar el componente correspondiente si existe, de lo contrario, renderizar null
  return TarifaComponent ? <TarifaComponent /> : null;
};

// Definir las funciones de renderizado para cada tarifa
const bonoTarjetaOrdinario10Viajes = () => {
  return (
    <View style={styles.section}>
      <Text style={{fontSize:RFPercentage(2.5)}}>
        Tarjeta recargable a bordo del autobús, en múltiplos de 10 viajes hasta
        un máximo de 30 viajes.
      </Text>
    </View>
  );
};

const bonoTarjetaJovenesPensionistas10Viajes = () => {
  return (
    <View style={styles.section}>
      <Text style={{fontSize:RFPercentage(2.5)}}>
        Tarjeta recargable a bordo del autobús, en múltiplos de 10 viajes hasta
        un máximo de 30 viajes.
        {"\n"}
        {"\n"}Para el uso de este título debe acreditarse ser menor de 25 años o
        mayor de 65 años. {"\n"}
        {"\n"}Caso de ser pensionista menor de 65 años ha de solicitar carné
        expedido por el operador acreditando la condición de pensionista
        mediante cartilla-tarjeta seguridad social o acreditación de cualquier
        Comunidad Autónoma.
      </Text>
    </View>
  );
};

const bonoTarjeta30DiasOrdinario = () => {
  return (
    <View style={styles.section}>
      <Text style={{fontSize:RFPercentage(2.5)}}>
        Tarjeta mensual idónea para aquellas personas que utilizan los autobuses
        urbanos con gran frecuencia, permitirá un número de desplazamientos
        ilimitados en todas las líneas, con una validez de 30 días consecutivos
        desde el día de la primera cancelación. Será un titulo personalizado
        mediante fotografía en la propia tarjeta expedida por el operador.
      </Text>
    </View>
  );
};

const bonoTarjeta30DiasJovenesPensionistas = () => {
  return (
    <View style={styles.section}>
      <Text style={{fontSize:RFPercentage(2.5)}}>
        Tarjeta mensual que permitirá un número de desplazamientos ilimitados en
        todas las líneas, con una validez de 30 días consecutivos desde el día
        de la primera cancelación. Será un titulo personalizado mediante
        fotografía en la propia tarjeta expedida por el operador, previa
        solicitud, aportando la documentación necesaria para verificar el perfil
        del título de transporte.
      </Text>
    </View>
  );
};

const bonoTarjetaFamiliar = () => {
  return (
    <View style={styles.section}>
      <Text style={{fontSize:RFPercentage(2.5)}}>
        La tarjeta familiar está dirigida a los miembros que integran una
        familia numerosa. Es una tarjeta personalizada tanto en recarga como en
        abonos de 30 días. Los hijos que utilicen la tarjeta deben ser menores
        de 25 años y convivir en el domicilio familiar.
      </Text>
    </View>
  );
};

const transbordo = () => {
  return (
    <View style={styles.section}>
      <Text style={{fontSize:RFPercentage(2.5)}}>
        Sres. Usuarios también en la fnalidad de facilitar el desplazamiento
        hacia el destino deseado, en este servicio dispone de la opción de
        transbordo gratuíto tras cancelación con la tarjeta multiviaje entre
        distintas líneas en el transcurso de 60 minutos. Adicionalmente
        cualquier otra información o aclaración puede ser consultada en esta
        página o en el teléfono gratuito de atención al usuario 900 70 70 71.
      </Text>
    </View>
  );
};

const bonoTarjetaDorada = () => {
  return (
    <View style={styles.section}>
      <Text style={{fontSize:RFPercentage(2.5)}}>
        Los requisitos para la obtención de la Tarjeta Dorada de carácter
        gratuito, título social destinado al colectivo de pensionistas con
        rentas bajas, es estar en posesión del carné que expide el Ayuntamiento
        y que gestiona el operador, acreditando estar dentro de los siguientes
        supuestos: Pensionistas (viudedad, jubilación y enfermedad) y sus
        cónyuges, cuyos ingresos totales anuales de su unidad familiar,
        incluidos los ingresos del cónyuge y demás miembros, no superen 1,5
        veces el Salario Mínimo Interprofesional del año en curso. Pensionistas
        pertenecientes a unidades familiares unipersonales cuyos ingresos no
        superen el Salario Mínimo Interprofesional del año en curso.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 20,
    alignItems: "center",
    
  },
});
export default TarifasInfoScreen;
