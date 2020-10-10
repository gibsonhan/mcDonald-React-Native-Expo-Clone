import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { fetchList } from '../util/service';
import { MENU } from '../global/reserveWord';

import AnnoucementCard from '../components/AnnoucmentCard';
import CarouselCard from '../components/CarouselCard';
import OrderCard from '../components/OrderCard';
import RewardCard from '../components/RewardCard';
import Trending from '../components/Trending';

import { useAppContext } from '../state/context';

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
      let response = await fetchList(MENU);
      let responseMenu = response.filter((item) =>
        homeMenu.includes(item.name),
      );
      setMenu(responseMenu);
    }
    fetchMenu();
  }, []);

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
