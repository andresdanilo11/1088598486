import React from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import { useState } from "react";

const Sumar = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();

  const [resultado, setResultado] = useState(0);

  function handleSum() {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResultado(sum);
  }
  return (
    <View>
      <Text>Numero 1</Text>
      <TextInput
        style={styles.container}
        onChangeText={(text) => setNum1(text)}
        value={num1}
      />
      <Text>Numero 2</Text>
      <TextInput
        style={styles.container}
        onChangeText={(text) => setNum2(text)}
        value={num2}
      />
      <Text style={styles.container}>resultado = {resultado}</Text>
      <Button onPress={handleSum} title="Sumar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderColor: "#red",
  },
});

export default Sumar;
