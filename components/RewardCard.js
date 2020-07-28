import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GlobalText from '../style/Text';
import GlobalColor from '../style/Color';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RewardCard = ({ navigation }) => {
  const profile = {
    McCafeReward: 1,
  };

  function generateStamp() {
    let _stamps = [];
    let rewards = profile.McCafeReward;

    //TODO: IS it possible to convert this to functional programin
    for (let i = 1; i <= 5; i++) {
      let stamped = rewards > 0 ? true : false;
      _stamps.push(<Stamp key={i} number={i} stamped={stamped} />);
      rewards -= 1;
    }

    return _stamps;
  }
  //TODO: GET an image of McCafe, and Absolute position it int there
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Text style={GlobalText.h2}>Your McCafe Reward</Text>
      <View style={styles.cardContainer}>
        <Text style={GlobalText.h2}>Get A</Text>
        <View style={styles.freeMcafeContainer}>
          <Text style={GlobalText.h1}>Free</Text>
          <Text style={GlobalText.h1}>McCafe</Text>
        </View>
        <Text style={GlobalText.l}>Buy 5 McCafe drinks, get 1 free* > </Text>
        <View style={styles.rewardContainer}>{generateStamp()}</View>
      </View>
      <Text style={[GlobalText.s, styles.miniText]}>
        *Offer valid only for full-price McCafe drinks. <br /> Valid at part.
        McD thru 09/27/20
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    marginTop: 20,
    paddingHorizontal: 20,
    maxWidth: 800,
  },
  miniText: {
    color: `${GlobalColor.grey}`,
    marginLeft: 8,
    marginTop: 8,
  },
  cardContainer: {
    backgroundColor: `${GlobalColor.yellow}`,
    justifyContent: 'space-evenly',
    height: 220,
    marginTop: 10,
    paddingLeft: 20,
    paddingVertical: 20,
    borderRadius: 8,
  },
  freeMcafeContainer: {
    flexDirection: 'row',
  },
  rewardContainer: {
    flexDirection: 'row',
  },
  stampContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderWidth: 4,
    borderRadius: 50,
    marginTop: 10,
    marginRight: 10,
  },
});

const Stamp = ({ number, stamped }) => {
  const backColor = !!stamped ? `${GlobalColor.red}` : '';
  const textColor = !!stamped
    ? `${GlobalColor.brown}`
    : `${GlobalColor.dkBrown}`;
  const borderColor = !!stamped ? 'yellow' : `${GlobalColor.dkBrown}`;
  return (
    <View
      style={[
        styles.stampContainer,
        { backgroundColor: backColor, borderColor: borderColor },
      ]}
    >
      <Text style={[GlobalText.h2, { color: textColor }]}>{number}</Text>
    </View>
  );
};

export default RewardCard;
