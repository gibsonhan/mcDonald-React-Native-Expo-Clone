import React from 'react';
//TODO -> implement the platform select to import IOS and Andriod style
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Btn = ({ text, textColor, color }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]}>
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    width: 240,
    height: 'auto',
    borderRadius: 2,
  },
  text: {
    fontSize: 16,
    margin: 12,
    textAlign: 'center',
  },
});

export default Btn;
