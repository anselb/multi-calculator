import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { MaterialCommunityIcons } from 'react-native-vector-icons'

export default class CalculatorButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.buttonFunc}
        style={styles.button}
      >
        { this.props.buttonText !== "button"
          ? <Text style={styles.buttonText}>{this.props.buttonText}</Text>
          : <MaterialCommunityIcons style={styles.buttonText} name={"numeric-4-box-multiple-outline"} />
        }
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
    margin: 2
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 40,
  }
});
