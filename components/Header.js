import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>{'<'}</Text>
      <Text>Logo</Text>
      <Text>{'>'}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: '100%',
  },
});

export default Header;
