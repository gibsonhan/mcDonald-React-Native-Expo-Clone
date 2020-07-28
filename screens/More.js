import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const More = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>More Screen</Text>
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

export default More;
