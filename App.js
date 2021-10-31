/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from "./src/home/index.js";

const App = () => {
  return(
    <View style={styles.container}>
      <Home/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
