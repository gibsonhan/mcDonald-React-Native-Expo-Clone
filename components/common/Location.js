import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//TODO []
/**
 *  - Location
 *			-> navigation screen modal
 * 	- Pickup
 * 		- Pick Up
 * 		- Uber Eats
 *
 */
const Location = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text>Now serving Lunch until 4:59PM</Text>
      </View>
      <View style={styles.catContainer}>
        <TouchableOpacity>
          <Text>Pick up > </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text> Address > </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    height: 100,
  },
  textContainer: {
    flex: 1,
  },
  catContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Location;
