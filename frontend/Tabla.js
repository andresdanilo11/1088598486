import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const TableComponent = () => {
  const tableHead = ['Nombre', 'Telefono', 'Correo'];
  const tableData = [
    ['Nombre 1', '3124343464', 'coreo@gmail.com'],
    ['Nombre 2', '3279937424', 'email@gmail.com'],
    // Agrega más filas aquí
  ];

  return (
    <ScrollView style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#red' }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
        <Rows data={tableData} textStyle={styles.text}/>
      </Table>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  text: {
    margin: 6,
  },
});

export default TableComponent;
