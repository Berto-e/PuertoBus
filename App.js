import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper'; // Importa el Provider de react-native-paper
import SearchMenu from './src/components/SearchMenu'; // Importa tu componente SearchMenu

const App = () => {
  return (
    <PaperProvider>
      <SearchMenu />
    </PaperProvider>
  );
};

export default App;
