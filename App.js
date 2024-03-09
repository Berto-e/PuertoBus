import React from "react";
import { Provider as PaperProvider } from "react-native-paper"; // Importa el Provider de react-native-paper
import { StyleSheet } from "react-native"; // Importa StyleSheet de react-native
import SearchMenu from "./src/components/SearchMenu"; // Importa tu componente SearchMenu
import { View } from "react-native";


const App = () => {
  return (
    
      <PaperProvider>
        <SearchMenu />
      </PaperProvider>
    
  );
};



export default App;
