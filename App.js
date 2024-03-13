import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import { useState } from "react";
import { MainStackNavigator } from "./src/navigation/StackNavigator";


const App = () => {
  const [homeScreenIsActive, sethomeScreenIsActive] = useState(true);
  
  return (
    
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  );
};
export default App;
