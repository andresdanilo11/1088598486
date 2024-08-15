import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Tarjeta = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Tarjeta</Text>
            <Text style={styles.content}>Contenido de la tarjeta.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        fontSize: 14,
        color: '#333',
    },
});

export default Tarjeta;
