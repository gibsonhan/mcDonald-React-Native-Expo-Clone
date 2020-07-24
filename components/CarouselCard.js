import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GlobalText from '../style/Text';
import Color from '../style/Color';

import Carousel from './common/Carousel';

const CarouselCard = ({ title, titleNav, items }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={GlobalText.h2}>{title}</Text>
        <View style={{ justifyContent: 'center' }}>
          <Text style={[GlobalText.h3, { color: 'blue' }]}>{titleNav}</Text>
        </View>
      </View>
      <Carousel items={items} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    width: '100vw',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});

export default CarouselCard;
