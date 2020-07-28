import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import AnnoucementCard from '../components/AnnoucmentCard';
import CarouselCard from '../components/CarouselCard';
import OrderCard from '../components/OrderCard';
import RewardCard from '../components/RewardCard';
import Trending from '../components/Trending';

const menuItems = [
  { title: 'Sandwiches & Meal', img: '' },
  { title: 'Happy Meal', img: '' },
  { title: 'McCafe', img: '' },
  { title: 'Fries & Sides', img: '' },
  { title: 'Sweets & Treats', img: '' },
];

//TODO setup appcontext to
//TODO is it possible to set up navigation into AppContext?
const Home = ({ navigation }) => {
  const [hasOrdered, setHasOrdered] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {!hasOrdered && <AnnoucementCard navigation={navigation} />}
        {hasOrdered && <OrderCard />}
        <RewardCard navigation={navigation} />
        <CarouselCard
          title="Menu"
          titleNav={'Full menu >'}
          items={menuItems}
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
