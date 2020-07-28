import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//TODO map out the react app tree structure
const Deal = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Deal</Text>
      <Text> Scan at Restaurant</Text>
      <Text> Add to Mobile order </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignDeals: 'center',
    justifyContent: 'center',
  },
});

export default Deal;
