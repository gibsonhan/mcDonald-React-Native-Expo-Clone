import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import AnnoucementCard from './components/AnnoucmentCard';
import RewardCard from './components/RewardCard';
import CarouselCard from './components/CarouselCard';
import Trending from './components/Trending';
import Header from './components/Header';
import BottomNav from './components/BottomNav';

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
      <Header />
      <ScrollView>
        <AnnoucementCard />
        <RewardCard />
        <CarouselCard title="Menu" titleNav={'Full menu >'} items={menuItems} />
        <Trending />
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}

//https://stackoverflow.com/questions/55264425/is-there-a-fixed-header-or-sticky-header-for-react-native

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
