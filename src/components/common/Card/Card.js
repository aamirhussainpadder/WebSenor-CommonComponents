import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { Colors } from '../../../constants/colors';
import { styles } from "./styles";

export const Card = ({ title, children }) => {


  /*

  *The card can be called this way below and we can mutate it as per out requirement
  *
  * 
  *  <Card title="MacBook Pro">
          Grab @ <Text style={[styles.highlight, {
            color: 'color'
          }]}>Rs 1.20 lac</Text> SUPERCHARGED BY M2. 10-core GPU and up to 24GB of unified memory.
        </Card>
  *

  */

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