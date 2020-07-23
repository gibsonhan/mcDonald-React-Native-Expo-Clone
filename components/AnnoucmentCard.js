import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GlobalText from '../style/Text';
import GlobalColor from '../style/Color';
import Btn from '../components/common/Btn';

const AnnoucmentCard = () => {
  //TODO: Insert Background image
  return (
    <View style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text style={[GlobalText.h1, styles.titleContainer]}>
          Seceretly love <br />
          onions?
        </Text>
        <Text style={[GlobalText.r, styles.subTextContainer]}>
          {' '}
          Order love onions{' '}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Btn
          text="Start Order"
          textColor={GlobalColor.dkBrown}
          color={GlobalColor.yellow}
        />
      </View>
      <Text style={[GlobalText.s, styles.miniTextContainer]}>
        Mobile Order & Pay at participating McDonald's. McD App registration
        required. <br />© 2020 McDonald's
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    height: 300,
    width: '100%',
    backgroundColor: 'yellow',
    paddingLeft: 20,
  },
  textContainer: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  miniTextContainer: {
    color: `${GlobalColor.grey}`,
    marginBottom: 'auto',
  },
});

export default AnnoucmentCard;
