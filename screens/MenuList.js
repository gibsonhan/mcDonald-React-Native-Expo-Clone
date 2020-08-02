import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import GlobalText from '../style/Text';

const MenuList = ({ route, navigation }) => {
  const props = route.params;
  const navigateOrder = () => navigation.navigate('Order');
  return (
    <View style={styles.mainContainer}>
      <View style={styles.listContainer}>
        <Text>MenuList Screen</Text>
        <Text>{props.key}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text> Want Something Else?</Text>
        <Text style={GlobalText.h4} onPress={navigateOrder}>
          {' '}
          View Full Menu >
        </Text>
        <Text>
          {' '}
          2000 calories a day is used for generatoin advice, but calorie needs
          vary. Additional nutrition information available upon request.
          Calories Shown do not reflect Customization
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 4,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    margin: 20,
  },
});

export default MenuList;
