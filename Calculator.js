import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CalculatorButton from './CalculatorButton'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentValue: 0,
      calcText: ""
    }
  }

  numberPress(number) {
    const updatedText = this.state.calcText += number
    this.setState({ calcText: updatedText })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.calcText}>{this.state.calcText}</Text>
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
              buttonFunc={() => this.numberPress('7')}
              buttonText='7'
            />
            <CalculatorButton
              buttonFunc={() => this.numberPress('8')}
              buttonText='8'
            />
            <CalculatorButton
              buttonFunc={() => this.numberPress('9')}
              buttonText='9'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='*'
            />
          </View>

          <View style={styles.row}>
            <CalculatorButton
              buttonFunc={() => this.numberPress('4')}
              buttonText='4'
            />
            <CalculatorButton
              buttonFunc={() => this.numberPress('5')}
              buttonText='5'
            />
            <CalculatorButton
              buttonFunc={() => this.numberPress('6')}
              buttonText='6'
            />
            <CalculatorButton
              buttonFunc={() => console.log("test")}
              buttonText='-'
            />
          </View>

          <View style={styles.row}>
            <CalculatorButton
              buttonFunc={() => this.numberPress('1')}
              buttonText='1'
            />
            <CalculatorButton
              buttonFunc={() => this.numberPress('2')}
              buttonText='2'
            />
            <CalculatorButton
              buttonFunc={() => this.numberPress('3')}
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
              buttonFunc={() => this.numberPress('0')}
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
