import React from "react";
import { View, Text, Pressable } from "react-native";

const InfoUsuarioScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1.0 },
          
        ]}
      >
        <Text>presiona aqui</Text>
      </Pressable>
    </View>
  );
};

export default InfoUsuarioScreen;
