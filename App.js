import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { MaterialCommunityIcons } from 'react-native-vector-icons'

import Calculator from './Calculator.js'

const TabNavigator = createBottomTabNavigator(
  {
    'Calculator 1': {
      screen: Calculator
    },
    'Calculator 2': {
      screen: Calculator
    },
    'Calculator 3': {
      screen: Calculator
    },
    'Master Calculator': {
      screen: Calculator
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        switch(routeName) {
          case 'Calculator 1':
            iconName = 'calculator-variant'
            break
          case 'Calculator 2':
            iconName = 'calculator-variant'
            break
          case 'Calculator 3':
            iconName = 'calculator-variant'
            break
          case 'Master Calculator':
            iconName = 'calculator'
            break
        }
        return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />
      }
    })
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(TabNavigator)
