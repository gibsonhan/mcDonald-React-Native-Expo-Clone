import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

import AnnoucementCard from '../components/AnnoucmentCard';
import CarouselCard from '../components/CarouselCard';
import OrderCard from '../components/OrderCard';
import RewardCard from '../components/RewardCard';
import Trending from '../components/Trending';

const homeMenu = [
  'Sandwiches & Meals',
  'Happy Meal',
  'Mc Cafe',
  'Fries, Sides, & More',
  'Sweets & Treats',
];

//TODO setup appcontext to
//TODO is it possible to set up navigation into AppContext?
const Home = ({ navigation }) => {
  const [hasOrdered, setHasOrdered] = useState(false);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function fetchMenu() {
      let response = await axios.get('http://localhost:3001/api/menu');
      let responseMenu = response.data.filter((item) =>
        homeMenu.includes(item.name),
      );
      setMenu(responseMenu);
    }
    fetchMenu();
  }, []);

  useEffect(() => {
    console.log(menu);
  }, [menu]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {!hasOrdered && <AnnoucementCard navigation={navigation} />}
        {hasOrdered && <OrderCard />}
        <RewardCard navigation={navigation} />
        <CarouselCard
          title="Menu"
          titleNav={'Full menu >'}
          items={menu}
          navigation={navigation}
        />
        <Trending navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
