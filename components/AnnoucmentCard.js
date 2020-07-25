import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GlobalText from '../style/Text';
import GlobalColor from '../style/Color';
import Btn from '../components/common/Btn';

const AnnoucmentCard = () => {
  const [annoucement, setAnnoucement] = useState({});
  function selectAnnoucment() {
    const annoucmentCards = [
      {
        img: '',
        title: 'Seceretly love',
        title2: 'onions?',
        titleContent: 'Order extra in the App',
        btnText: 'Start Order',
        btnColor: `${GlobalColor.yellow}`,
        navLink: '',
        dateRestriction: 'None',
        legal:
          "Mobile Order & Pay at participating McDonald's. McD App registration required. © 2020 McDonald's",
      },
      {
        img: '',
        title: 'Free Fries Day',
        titleContent: 'Enjoy free Medium Fries with a minium',
        titleContent2: '$1 Mobile Order & Pay purchase',
        btnText: 'View Deals',
        btnColor: `${GlobalColor.lightGrey}`,
        navLink: '',
        dateRestriction: 'Friday',
        legal:
          "Get free Medium Fries with a minium $1 Mobile Order & Pay purchase, tax excl. Valid 1x/ Friday thru 9/27 at participating McD. Mobile Order & Pay at participating McD. McD app registration required. © 2020 McDonald's ",
      },
    ];

    let randNum = Math.floor(
      Math.random() * (annoucmentCards.length - 1 - 0 + 1) + 0,
    );
    console.log(randNum);
    return annoucmentCards[randNum];
  }
  useEffect(() => {
    setAnnoucement(selectAnnoucment());
  }, []);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <Text style={GlobalText.h1}>
            {annoucement.title} <br />
            {annoucement.title2}
          </Text>
          <Text style={GlobalText.l}>
            {annoucement.titleContent} <br />
            {annoucement.titleContent2}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Btn
            text={annoucement.btnText}
            textColor={GlobalColor.dkBrown}
            color={GlobalColor.yellow}
          />
        </View>
      </View>
      <Text style={[GlobalText.s, styles.legal]}>{annoucement.legal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  cardContainer: {
    height: 280,
    paddingLeft: 20,
    paddingTop: 5,
    backgroundColor: 'yellow',
  },
  textContainer: {
    flex: 2,
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  legal: {
    color: `${GlobalColor.grey}`,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
});

export default AnnoucmentCard;
