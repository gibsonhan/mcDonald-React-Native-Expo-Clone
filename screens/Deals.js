import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RewardCard from '../components/RewardCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DealList = [
  {
    title: '2 for $3 McChicken or McDouble',
    titleContext: 'Daily Deal!',
    expiration: 'Offer expires today',
    navLink: '',
  },
  {
    title: '2 for $3 McChicken or McDouble',
    titleContext: 'Daily Deal!',
    expiration: 'Offer expires today',
    navLink: '',
  },
  {
    title: '2 for $3 McChicken or McDouble',
    titleContext: 'Daily Deal!',
    expiration: 'Offer expires today',
    navLink: '',
  },
  {
    title: '2 for $3 McChicken or McDouble1',
    titleContext: 'Daily Deal!',
    expiration: 'Offer expires today',
    navLink: '',
  },
];

const Deals = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <RewardCard />
      <FlatList
        data={DealList}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <CouponTicket props={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const CouponTicket = ({ route, navigation, props }) => {
  const { title, titleContext, expiration } = props;
  return (
    <TouchableOpacity style={styles.couponContainer}>
      <Text>{title}</Text>
      <Text>{titleContext}</Text>
      <Text>{expiration}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  couponContainer: {
    height: 120,
    padding: 20,
  },
});

export default Deals;
