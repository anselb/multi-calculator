import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class CalculatorButton extends React.Component {
  renderCalcValues() {
    return this.props.calcNums.map((calcNum, key) => {
      return (
        <TouchableHighlight
          key={key}
          style={styles.button}
          onPress={() => {
            this.props.hideModal()
          }}>
          <Text>{calcNum}</Text>
        </TouchableHighlight>
      )
    })
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>Select a value to use in this calculator</Text>

            {this.renderCalcValues()}

            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                this.props.hideModal()
              }}>
              <Text>Hide Values</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
});
