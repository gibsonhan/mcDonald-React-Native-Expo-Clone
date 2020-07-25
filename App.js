import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import AnnoucementCard from './components/AnnoucmentCard';
import RewardCard from './components/RewardCard';
import CarouselCard from './components/CarouselCard';
import Trending from './components/Trending';

const menuItems = [
  { title: 'Sandwiches & Meal', img: '' },
  { title: 'Happy Meal', img: '' },
  { title: 'McCafe', img: '' },
  { title: 'Fries & Sides', img: '' },
  { title: 'Sweets & Treats', img: '' },
];
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <AnnoucementCard />
        <RewardCard />
        <CarouselCard title="Menu" titleNav={'Full menu >'} items={menuItems} />
        <Trending />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
