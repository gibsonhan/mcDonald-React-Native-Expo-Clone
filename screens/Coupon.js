import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Btn from '../components/common/Btn';
import GlobalColor from '../style/Color';
import Coupon from '../components/common/Coupon';

const CouponScreen = ({ route, navigation }) => {
  const props = route.params;
  const navToQRScreen = () => navigation.push('QRCode', { QRCODE: 'QRCODE' });
  const navToItemScreen = () => navigation.navigate('Item', { item: 'items' });
  return (
    <View style={styles.mainContainer}>
      <View style={styles.couponContainer}>
        {!!props && <Coupon navigation={navigation} props={props} />}
      </View>
      <View style={styles.catContainer}>
        <Btn
          text={'Add to order'}
          color={`${GlobalColor.grey}`}
          onPress={navToItemScreen}
        />
        <Btn
          text={'Scan at Restaurant'}
          color={`${GlobalColor.grey}`}
          onPress={navToQRScreen}
        />
      </View>
      <View style={styles.moreNavContainer}>
        <Text> Terms of this Deal</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
  },
  couponContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  catContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  moreNavContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CouponScreen;
