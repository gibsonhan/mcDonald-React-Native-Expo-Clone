import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GlobalText from '../../style/Text';
import GlobalColor from '../../style/Color';

import Btn from './Btn';
const SingleCard = ({ props, navigation }) => {
  const {
    title,
    title2,
    titleContent,
    titleContent2,
    btnText,
    btnTextColor,
    btnColor,
    legal,
    navLink,
  } = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <Text style={GlobalText.h2}>
            {title} <br />
            {title2}
          </Text>
          <Text style={GlobalText.l}>
            {titleContent} <br />
            {titleContent2}
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <Btn
            text={btnText}
            color={`${GlobalColor[btnColor]}`}
            textColor={btnTextColor}
            onPress={() => navigation.navigate(navLink)}
          />
        </View>
      </View>
      <Text style={[GlobalText.s, styles.legalText]}>{legal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
    maxWidth: 800,
  },
  cardContainer: {
    height: 240,
    justifyContent: 'space-around',
    backgroundColor: 'yellow',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  textContainer: {
    flex: 2,
    justifyContent: 'space-evenly',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  legalText: {
    paddingTop: 10,
    color: `${GlobalColor.grey}`,
  },
});

export default SingleCard;
