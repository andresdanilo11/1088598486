import React from "react";
import { View, Image, StyleSheet } from "react-native";


const Imagen = () => {
  return (
    <View style={styles.container}>
      {<Image
        source={require('./Imagenes/2.png')}
      /> }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Imagen;
