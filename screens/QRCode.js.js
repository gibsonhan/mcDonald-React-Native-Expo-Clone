import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QRCode = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>QRCode Screen</Text>
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

export default QRCode;
