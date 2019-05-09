import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class CalculatorButton extends React.Component {
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>
            {}
            <Text>{this.props.calcNums}</Text>

            <TouchableHighlight
              onPress={() => {
                this.props.hideModal()
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}
