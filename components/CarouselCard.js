import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import GlobalText from '../style/Text';

import Carousel from './common/Carousel';
import { ORDER } from '../global/reserveWord';

const CarouselCard = ({ title, titleNav, items, navigation }) => {
  console.log(navigation);
  console.log('what is item', items);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={GlobalText.h2}>{title}</Text>
        <TouchableOpacity
          style={{ justifyContent: 'center', marginRight: 20 }}
          onPress={() => navigation.navigate(ORDER)}
        >
          <Text style={[GlobalText.h3, { color: 'blue' }]}>{titleNav}</Text>
        </TouchableOpacity>
      </View>
      <Carousel items={items} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingLeft: 20,
    width: '100vw',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    maxWidth: 800,
  },
});

export default CarouselCard;
