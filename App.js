import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import { useRef } from "react";
import {useNavigationContainerRef,} from '@react-navigation/native';
import { useState } from "react";


const App = () => {
  const [drawerHeaderShown, setDrawerHeaderShown] = useState(false);
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();
  return (
    
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute().name;
        const trackScreenView = () => {
          console.log(currentRouteName);
          if (currentRouteName === "HomeScreen") {
            setDrawerHeaderShown(true);
          } else {
            // De lo contrario, ocultar el encabezado del cajón
            setDrawerHeaderShown(false);
          }
        };

      

        if (previousRouteName !== currentRouteName) {
          // Save the current route name for later comparison
          routeNameRef.current = currentRouteName;

          // Replace the line below to add the tracker from a mobile analytics SDK
          await trackScreenView(currentRouteName);
        }
      }}
    >
      <DrawerNavigator drawerHeaderShown={drawerHeaderShown}/>
    </NavigationContainer>
  );
};
export default App;
