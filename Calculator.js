import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Calculator extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => console.log("test")}
              style={styles.button}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log("test")}
              style={styles.button}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log("test")}
              style={styles.button}
            >
              <Text>1</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => console.log("test")}
              style={styles.button}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log("test")}
              style={styles.button}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log("test")}
              style={styles.button}
            >
              <Text>1</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: 'blue',
  }
});
