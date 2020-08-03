import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

import GlobalText from '../style/Text';
import LocationCard from '../components/common/Location';
import ReorderCard from '../components/ReorderCard';
//import SearchCard from '../components/common/Search';
import Navigate from '../components/common/Navigate';

const Order = ({ route, navigation }) => {
  console.log(route, navigation);
  return (
    <View style={styles.mainContainer}>
      <LocationCard />
      <SearchCard />
      <ReorderCard navigation={navigation} />
      <NavigationCard data={ExploreMenu} navigation={navigation} />
    </View>
  );
};

const PastOrder = [
  {
    items: ['items1', 'items2'],
    datePurchase: '02-12-12',
  },
];

const NavigationCard = ({ navigation }) => {
  return (
    <FlatList
      data={ExploreMenu}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <Navigate props={item} navigation={navigation} />
      )}
      ListHeaderComponent={
        <Text style={GlobalText.h3}>{'Expore our Menu'}</Text>
      }
    />
  );
};

const ExploreMenu = [
  { img: '', title: 'Deals', navLink: 'Deals' },
  { img: '', title: 'Sandwiches & Meals', navLink: 'MenuList' },
  { img: '', title: 'Promotions', navLink: 'MenuList' },
  { img: '', title: 'Sweets & Treets', navLink: 'MenuList' },
  { img: '', title: 'HappyMeal', navLink: 'MenuList' },
  { img: '', title: 'Fries, Side, & More', navLink: 'MenuList' },
  { img: '', title: 'McCafe', navLink: 'MenuList' },
  { img: '', title: 'Beverages', navLink: 'MenuList' },
  { img: '', title: '$1 $2 $3 Dollar Menu', navLink: 'MenuList' },
];

const styles = StyleSheet.create({
  mainContainer: {},
});

export default Order;
