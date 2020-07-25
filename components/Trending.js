import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SingleCard from './common/SingleCard';
import GlobalText from '../style/Text';
import GlobalColor from '../style/Color';

const trendingCards = [
  {
    title: 'Crispy, tasty, ',
    title2: 'one-dolary',
    titleContent: '$1 Large Fries in the App',
    btnText: 'Get Deal',
    btnColor: `${GlobalColor.lightGrey}`,
    navLink: '',
    legal:
      "Valid thru 9/17/20 at participating McDonald's Mobile App registration required. © 2020 McDonald's",
  },
  {
    title: 'Sip into Summer',
    titleContent: 'Refreshing new Minute Maid®',
    titleContent2: 'Pink Lemonade Slushie',
    btnText: 'Order Now',
    btnColor: `${GlobalColor.yellow}`,
    navLink: '',
    legal:
      "Avaliable at participating McDonald's Mobile order & Pay at participating McDonald's Mobile App registration required. ®",
  },
  {
    title: 'Order',
    title2: 'McDelivery now',
    titleContent: '$1 Large Fries in the App',
    btnText: 'OrderNow',
    btnColor: `${GlobalColor.yellow}`,
    navLink: '',
    legal:
      "Valid thru 9/17/20 at participating McDonald's Mobile App registration required. © 2020 McDonald's",
  },
];

const Trending = () => {
  return (
    <View styles={styles.mainContainer}>
      <Text style={[GlobalText.h1, { margin: 20 }]}>Trending</Text>
      {trendingCards.map((card, idx) => (
        <SingleCard key={idx} props={card} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
});

export default Trending;
