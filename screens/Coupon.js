import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Coupon = ({ route }) => {
  console.log(route);
  return (
    <View style={styles.mainContainer}>
      <Text>Coupon Screen</Text>
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

export default Coupon;
