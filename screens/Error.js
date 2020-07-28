import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Error = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>We have an error</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Error;
