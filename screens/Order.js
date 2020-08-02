import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

import GlobalText from '../style/Text';

const Order = ({ route, navigate }) => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text>Now serving?</Text>
        <TouchableOpacity>
          <Text>Pick Up</Text>
        </TouchableOpacity>
        <Text>Geo location, touch opacity brings up map module</Text>
      </View>
      <View>
        <Text>Quickly Reorder</Text>
        <Text>Flat list of recent order, need to create app context</Text>
      </View>
      <Text>Order List</Text>
      <FlatList
        data={ExploreMenu}
        keyExtractor={(item) => item.text}
        renderItem={({ item }) => <Text>{item.text}</Text>}
        ListHeaderComponent={
          <Text style={GlobalText.h3}>{'Expore our Menu'}</Text>
        }
      />
    </View>
  );
};

const ExploreMenu = [
  { img: '', text: 'Deals', navLink: '' },
  { img: '', text: 'Sandwiches & Meals', navLink: '' },
  { img: '', text: 'Promotions', navLink: '' },
  { img: '', text: 'Sweets & Treets', navLink: '' },
  { img: '', text: 'HappyMeal', navLink: '' },
  { img: '', text: 'Fries, Side, & More', navLink: '' },
  { img: '', text: 'McCafe', navLink: '' },
  { img: '', text: 'Beverages', navLink: '' },
  { img: '', text: '$1 $2 $3 Dollar Menu', navLink: '' },
];

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Order;
