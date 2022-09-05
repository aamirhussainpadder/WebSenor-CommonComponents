import React from 'react';
import {
  Text,
  View,
  useColorScheme
} from 'react-native';
import { Colors } from '../../../constants/colors';
import { styles } from "./styles";

export const Card = ({ title, children }) => {

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={
          [styles.sectionTitle, { color: Colors.colorByTheme }]}>
        {title}
      </Text>
      <Text
        style={[styles.sectionDescription, { color: Colors.colorByTheme }]}>
        {children}
      </Text>
    </View>
  );
};