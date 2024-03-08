import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Button } from 'react-native';
import { TextInput, Menu } from 'react-native-paper'; // Importa Menu de react-native-paper

// Importa el JSON
import nucleosData from '../assets/Nucleos_Origen_Destino.json';

const SearchMenu = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [visible, setVisible] = useState(false);

  const handleSearch = () => {
    //  Lógica para buscar autobuses según el destino y la fecha
    console.log('Buscar autobuses con destino:', destination, 'y fecha:', date);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bus Puerto</Text>
        <Text style={styles.subtitle}>Introduce tu destino.</Text>
      </View>
      <View style={styles.inputs}>
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={
            <TouchableWithoutFeedback onPress={() => setVisible(true)}>
              <View>
                <TextInput
                  style={styles.input}
                  label="Seleccionar destino"
                  value={destination}
                  editable={false} // Para desactivar la edición del campo de texto
                />
              </View>
            </TouchableWithoutFeedback>
          }
        >
          {nucleosData.nucleos.map((item, index) => (
            <Menu.Item key={index} onPress={() => { setDestination(item); setVisible(false); }} title={item} />
          ))}
        </Menu>
        <TextInput
          style={styles.input}
          label="Fecha"
          placeholder="Fecha"
          value={date}
          onChangeText={text => setDate(text)}
        />
         <Button style={styles.button} title="Buscar" onPress={handleSearch} />
      </View>
      {/* Aquí puedes renderizar los detalles de los autobuses */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  inputs: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
    borderRadius: 20,
  },
});

export default SearchMenu;
