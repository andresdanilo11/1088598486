import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  function handleIncremenet() {
    setContador(contador + 1);
  }

  return (
    <View>
      <text>{contador}</text>
      <Button onPress={handleIncremenet} title="Incrementar" />
    </View>
  );
};

export default Contador;
