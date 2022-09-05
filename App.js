/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import { Colors as Color } from 'react-native/Libraries/NewAppScreen';
import { Card } from './src/components/common/Card/Card';
import { isDarkMode, Colors } from './src/constants/colors';

const App: () => Node = () => {

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Color.lighter : Color.darker,
  };
  const colorByTheme = isDarkMode ? '#fff' : '#000'

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Card title="MacBook Pro">
          Grab @ <Text style={[styles.highlight, {
            color: Colors.colorByTheme
          }]}>Rs 1.20 lac</Text> SUPERCHARGED BY M2. 10-core GPU and up to 24GB of unified memory.
        </Card>
        <Card title="MacBook Pro">
          Grab @ <Text style={[styles.highlight, {
            color: Colors.colorByTheme
          }]}>Rs 1.20 lac</Text> SUPERCHARGED BY M2. 10-core GPU and up to 24GB of unified memory.
        </Card>
        <Card title="MacBook Pro">
          Grab @ <Text style={[styles.highlight, {
            color: Colors.colorByTheme
          }]}>Rs 1.20 lac</Text> SUPERCHARGED BY M2. 10-core GPU and up to 24GB of unified memory.
        </Card>
        <Card title="MacBook Pro">
          Grab @ <Text style={[styles.highlight, {
            color: Colors.colorByTheme
          }]}>Rs 1.20 lac</Text> SUPERCHARGED BY M2. 10-core GPU and up to 24GB of unified memory.
        </Card>
        <Card title="MacBook Pro">
          Grab @ <Text style={[styles.highlight, {
            color: Colors.colorByTheme
          }]}>Rs 1.20 lac</Text> SUPERCHARGED BY M2. 10-core GPU and up to 24GB of unified memory.
        </Card>
        <Card title="MacBook Pro">
          Grab @ <Text style={[styles.highlight, {
            color: Colors.colorByTheme
          }]}>Rs 1.20 lac</Text> SUPERCHARGED BY M2. 10-core GPU and up to 24GB of unified memory.
        </Card>


      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700'
  },
});

export default App;
