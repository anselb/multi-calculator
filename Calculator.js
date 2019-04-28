import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CalculatorButton from './CalculatorButton'

export default class Calculator extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='1'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='2'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='3'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='3'
            />
          </View>

          <View style={styles.row}>
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='4'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='5'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='6'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='3'
            />
          </View>

          <View style={styles.row}>
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='4'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='5'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='6'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='3'
            />
          </View>

          <View style={styles.row}>
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='4'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='5'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='6'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='3'
            />
          </View>

          <View style={styles.row}>
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='4'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='5'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='6'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='3'
            />
          </View>
        </View>
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window')
const buttonContainerHeight = Math.round(height * 0.6)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    height: buttonContainerHeight,
    width: width,
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
});
