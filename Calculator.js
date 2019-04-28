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
      calcText: "",
      operator: "",
      updateText: false
    }
  }

  numberPress(number) {
    let updatedText

    // Check if new calculation is being made
    if (this.state.operator === "equal") {
      this.setState({
        currentValue: 0,
        calcText: "",
        operator: "",
        updateText: false
      })
    }

    // Check if new number needs to be shown (after choosing operator)
    if (this.state.updateText === true) {
      this.setState({ updateText: false })
      updatedText = "" + number
    } else {
      // Check if there is already a decimal
      if (number === "." && this.state.calcText.indexOf(".") !== -1) {
        return
      }

      updatedText = this.state.calcText + number
    }

    this.setState({ calcText: updatedText })
  }

  reset() {
    if (this.state.calcText !== "") {
      this.setState({ calcText: "", operator: "" })
    } else {
      this.setState({ currentValue: 0 })
    }
  }

  // TODO: Make sure calculator handles order of operations
  // (5 + 5 * 5 = 30)
  calculate(newOperator) {
    const { currentValue, calcText } = this.state
    let updatedNum

    switch(this.state.operator) {
      case "add":
        updatedNum = currentValue + Number(calcText)
        break
      case "subtract":
        updatedNum = currentValue - Number(calcText)
        break
      case "multiply":
        updatedNum = currentValue * Number(calcText)
        break
      case "divide":
        updatedNum = currentValue / Number(calcText)
        break
      case "equal":
        updatedNum = currentValue
        break
      default:
        updatedNum = currentValue + Number(calcText)
    }

    this.setState({
      currentValue: updatedNum,
      calcText: String(updatedNum),
      operator: newOperator,
      updateText: true
    })
  }

  percent() {
    let updatedNum = Number(this.state.calcText)

    if (this.state.operator === "" || this.state.operator === "equal") {
      updatedNum /= 100
      this.setState({ currentValue: updatedNum })
    } else {
      updatedNum = updatedNum * this.state.currentValue / 100
    }

    this.setState({ calcText: String(updatedNum) })
  }

  changeSign() {
    let updatedNum = Number(this.state.calcText)
    updatedNum *= -1
    this.setState({ calcText: String(updatedNum) })

    if (this.state.operator === "" || this.state.operator === "equal") {
      this.setState({ currentValue: updatedNum })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.calcText}>{this.state.calcText}</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            <CalculatorButton
              buttonFunc={() => this.reset()}
              buttonText={this.state.calcText ? 'C' : 'AC'}
            />
            <CalculatorButton
              buttonFunc={() => this.changeSign()}
              buttonText='+/1'
            />
            <CalculatorButton
              buttonFunc={() => this.percent()}
              buttonText='%'
            />
            <CalculatorButton
              buttonFunc={() => this.calculate('divide')}
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
              buttonFunc={() => this.calculate('multiply')}
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
              buttonFunc={() => this.calculate('subtract')}
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
              buttonFunc={() => this.calculate('add')}
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
              buttonFunc={() => this.numberPress('.')}
              buttonText='.'
            />
            <CalculatorButton
              buttonFunc={() => this.calculate('equal')}
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
