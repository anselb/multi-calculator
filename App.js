import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Calculator from './components/Calculator.js'
import reducers from './reducers'
const store = createStore(reducers)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CalcApp />
      </Provider>
    );
  }
}

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

const CalcApp = createAppContainer(TabNavigator)
