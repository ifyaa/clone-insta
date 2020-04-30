import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import Home from './navigation/Home';


export default function App() {
  return (
    <View style={styles.outer}>
      <Header />
      <Home/>
      <Text> 지랄같은 일들</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  outer: {
    flex: 1,

  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});