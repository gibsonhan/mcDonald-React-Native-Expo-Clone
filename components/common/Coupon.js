import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import GlobalColor from '../../style/Color';
import GlobalText from '../../style/Text';

const Coupon = ({ navigation, props }) => {
  const { title, titleContext, expiration, CAT } = props;
  const navigate =
    CAT === true
      ? () => console.log('no navigation')
      : () => navigation.navigate('Coupon', props);

  return (
    <TouchableOpacity style={styles.couponContainer} onPress={navigate}>
      <View style={styles.couponBar}>
        <View style={styles.couponBar__Circle} />
      </View>
      <View style={styles.couponContent}>
        <View style={{ flex: 3 }}>
          <Text style={[GlobalText.h2, { color: `${GlobalColor.red}` }]}>
            {title}
          </Text>
          <Text style={[GlobalText.l, { marginTop: 10 }]}>{titleContext}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Text style={[GlobalText.s, { color: `${GlobalColor.grey}` }]}>
            {expiration}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  couponContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 240,
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

export default Coupon;
