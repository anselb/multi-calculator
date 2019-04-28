import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class CalculatorButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.buttonFunc}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{this.props.buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: 'blue',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 40,
  }
});
