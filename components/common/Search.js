import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import GlobalText from '../../style/Text';

//TODO map out the react app tree structure
const Search = () => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.searchContainer}>
        <Text>Icon</Text>
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.changeMenuContainer}>
        <Text>Change Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    height: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    flex: 5,
    backgroundColor: 'red',
  },
  changeMenuContainer: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default Search;
