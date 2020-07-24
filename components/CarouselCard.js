import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native';
import GlobalText from '../style/Text';
import Color from '../style/Color';

const CarouselCard = ({ title, titleNav }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text>{title}</Text>
        <Text>{titleNav}</Text>
      </View>
      <Carousel
        ref={carouselRef}
        sliderWidth={}
        sliderHeight={}
        itemWidth={}
        data={}
        renderItem={}
        hasParallaxImages={}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  carouselCard: {},
});

export default CarouselCard;
