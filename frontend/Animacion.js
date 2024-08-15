import React, { useRef, useEffect } from "react";
import { Animated, View, StyleSheet, Button } from "react-native";

const Animacion = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Valor inicial de la opacidad
  const moveAnim = useRef(new Animated.Value(0)).current; // Valor inicial para el movimiento

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    Animated.timing(moveAnim, {
      toValue: 100,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, moveAnim]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedView,
          {
            opacity: fadeAnim, // Bind opacity to animated value
            transform: [{ translateX: moveAnim }], // Bind translateX to animated value
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animatedView: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
});

export default Animacion;
