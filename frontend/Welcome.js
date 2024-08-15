import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        {<Image source={require("./Imagenes/turismo.jpg")} />}
        <Text style={styles.gra}>Travel Agence</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    gra:{
        fontSize: 50,
    },
  });

export default Welcome;
