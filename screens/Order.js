import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import axios from 'axios';

import GlobalText from '../style/Text';
import LocationCard from '../components/common/Location';
import ReorderCard from '../components/ReorderCard';
import SearchCard from '../components/common/Search';
import Navigate from '../components/common/Navigate';

const Order = ({ route, navigation }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function fetchMenu() {
      try {
        let response = await axios.get('http://localhost:3001/api/menu');
        setMenu(response.data);
      } catch (error) {
        console.log('failed to catche error', error);
      }
    }
    fetchMenu();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <LocationCard />
      <SearchCard />
      <ReorderCard navigation={navigation} />
      <NavigationCard data={menu} navigation={navigation} />
    </View>
  );
};

const PastOrder = [
  {
    items: ['items1', 'items2'],
    datePurchase: '02-12-12',
  },
];

const NavigationCard = ({ data, navigation }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <Navigate props={item} navigation={navigation} />
      )}
      ListHeaderComponent={
        <Text style={[GlobalText.h2, { margin: 20 }]}>{'Expore our Menu'}</Text>
      }
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
});

export default Order;
