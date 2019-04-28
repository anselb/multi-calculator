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
        <Text style={styles.calcText}>1234567890</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='AC'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='+/1'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='%'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='/'
            />
          </View>

          <View style={styles.row}>
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='7'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='8'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='9'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='*'
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
              buttonText='-'
            />
          </View>

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
              buttonText='+'
            />
          </View>

          <View style={styles.row}>
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='<'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='0'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='.'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='='
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
    justifyContent: 'flex-end',
  },
  calcText: {
    textAlign: 'right',
    fontSize: 40,
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
