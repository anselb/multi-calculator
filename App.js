import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import Calculator from './Calculator.js'

class App extends React.Component {
  render() {
    return (
      <Calculator />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  "Calculator 1": Calculator,
  "Calculator 2": Calculator,
  "Calculator 3": Calculator,
  "Master Calculator": Calculator,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(TabNavigator)
