import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Contactos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Puedes contactarnos por los siguientes medios</Text>
      <Text style={styles.text}>Celular: 3234859584</Text>
      <Text style={styles.text}>Correo: travelagence@gmail.com</Text>
      <Text style={styles.text}>Pagina Web: Travel Agence</Text>
      <Button title="Regresar a inicio" onPress={() => navigation.navigate('Welcome')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    padding: 20,
  },
  text:{
    fontSize: 20,
    color: '#333',
    marginBottom:10,
  },
});

export default Contactos;
