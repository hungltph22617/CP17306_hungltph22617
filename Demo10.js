import React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import Flex from './Demo11';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Demo10 extends React.Component {
  state = {
    w: 200,
    h: 200,
  };

  _onPress = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({ w: this.state.w + 15, h: this.state.h + 15 });
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={[styles.box, { width: this.state.w, height: this.state.h }]}
        />
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Animation</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('Demo11', {
            itemId: 2003,
            name: 'Ca5-CP17306',
          });
        }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Chuyển Màn 2</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 300,
    height: 300,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});