import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Simples from './componentes/Simples';
import { Inverter, MegaSena } from './componentes/Multi';
import ParImpar from './componentes/ParImpar';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Simples />
        <Inverter texto='Local Machine' />
        <MegaSena />
        <ParImpar numero={3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  f20:{
    fontSize: 20,
  }
});
