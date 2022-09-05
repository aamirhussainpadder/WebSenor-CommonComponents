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
import { isDarkMode, Colors } from './src/constants/colors';
import Flatlist from './src/components/common/Flatlist.js/Flatlist';

const App: () => Node = () => {

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Color.lighter : Color.darker,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

        <Flatlist />

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
