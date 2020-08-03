import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import GlobalText from '../../style/Text';
//TODO map out the react app tree structure
const Navigate = ({ props, navigation }) => {
  const { img, title, navLink } = props;
  const navigate = () => navigation.navigate(navLink, { title: title });
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={navigate}>
      <View style={styles.imgContainer}>
        <Text style={styles.imgContainer}> {img + '1'} </Text>
      </View>
      <View style={styles.txtContainer}>
        <Text style={[GlobalText.h3]}> {title} </Text>
        <Text style={[GlobalText.h2]}> > </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
  },
  imgContainer: {
    height: 80,
    width: 80,
    backgroundColor: 'yellow',
  },
  txtContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'light-grey',
    height: '100%',
    maxWidth: 600,
    paddingHorizontal: 5,
  },
});

export default Navigate;
