import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Item = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Item Screen</Text>
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

export default Item;
