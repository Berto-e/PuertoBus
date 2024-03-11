import React from 'react';
import { View, Text, Button } from 'react-native';
import SearchMenu from '../components/SearchMenu'; // Asegúrate de importar correctamente tu componente SearchMenu

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Este es tu menú de búsqueda */}
      <SearchMenu />

      {/* Aquí colocamos el contenido debajo del menú */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default DetailsScreen;
