import React from 'react';
import { View, Text } from 'react-native';
import NavBar from '../components/NavBar';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <NavBar/>
    </View>
  );
}

export default HomeScreen;
