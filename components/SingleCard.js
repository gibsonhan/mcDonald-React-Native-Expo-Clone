import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GlobalText from '../style/Text';
import Color from '../style/Color';
import Btn from './common/Btn';

const SingleCard = ({
  title,
  titleContent,
  legalText,
  btnText,
  btnTextColor,
  btnColor,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.titleContainer}>
          <Text>{title}</Text>
          <Text>{titleContent}</Text>
        </View>
        <Btn text={btnText} color={btnColor} textColor={btnTextColor} />
      </View>
      <Text styles={styles.legalText}>{legalText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
  },
  cardContainer: {
    paddingHorizontal: 20,
    paddingLeft: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  legalText: {
    paddingTop: 10,
  },
});

export default SingleCard;
