import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Reorder = ({ navigation }) => {
  const navigate = navigation.navigate('Recents');
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text> Quickly Reorder </Text>
        <TouchableOpacity onPress={navigate}>
          <Text>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <Text>Flast list of recent order</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  topContainer: {},
  listContainer: {},
});

export default Reorder;
