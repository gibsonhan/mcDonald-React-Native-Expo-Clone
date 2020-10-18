import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RewardCard from '../components/RewardCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { COUPON } from '../global/reserveWord';
import GlobalColor from '../style/Color';
import GlobalText from '../style/Text';
import { useAppContext } from '../state/context';

const Deals = ({ navigation }) => {
  const { state } = useAppContext();
  console.log('state check', state[COUPON]);
  return (
    <View style={styles.mainContainer}>
      <RewardCard />
      <FlatList
        data={state[COUPON]}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <CouponTicket props={item} navigation={navigation} />
        )}
        style={{ marginTop: 20 }}
        ListHeaderComponent={
          <Text style={[GlobalText.h2, { marginLeft: 20 }]}>
            {'Your Daily Deals'}
          </Text>
        }
      />
    </View>
  );
};

const CouponTicket = ({ route, navigation, props }) => {
  const { title, titleContent, expiration } = props;
  return (
    <TouchableOpacity
      style={styles.couponContainer}
      onPress={() => {
        navigation.navigate(COUPON, { ...props, CAT: true });
      }}
    >
      <View style={styles.couponBar}>
        <View style={styles.couponBar__Circle} />
      </View>
      <View style={styles.couponContent}>
        <View style={{ flex: 3 }}>
          <Text style={[GlobalText.h3, { color: `${GlobalColor.red}` }]}>
            {title}
          </Text>
          <Text style={{ marginTop: 4 }}>{titleContent}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={[GlobalText.s, { color: `${GlobalColor.grey}` }]}>
            Offer Expires {expiration}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  couponContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 160,
    marginLeft: 20,
    marginVertical: 5,
    borderStyle: 'solid',
    backgroundColor: `${GlobalColor.yellow}`,
    borderWidth: 5,
    borderColor: 'white',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 14,
    borderRadius: 10,
    maxWidth: 600,
  },
  couponBar: {
    backgroundColor: `${GlobalColor.red}`,
    height: '100%',
    width: 20,
    borderTopStartRadius: 10,
    borderBottomLeftRadius: 10,
  },
  couponBar__Circle: {
    position: 'absolute',
    top: '50%',
    left: -5,
    backgroundColor: `${GlobalColor.white}`, //Must match global background color
    borderRadius: '50%',
    height: 14,
    width: 14,
  },
  couponContent: {
    justifyContent: 'space-between',
    maxWidth: '66%',
    marginLeft: 10,
    marginTop: 20,
    marginVertical: 14,
  },
});

export default Deals;
