import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import GlobalText from '../../style/Text';
//TODO map out the react app tree structure

const Navigate = ({ props, navigation }) => {
  const { img, name, navLink } = props;
  const navigate = () =>
    navigation.navigate(navLink, { title: name, data: props });
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={navigate}>
      <Image
        style={styles.imgContainer}
        source={{
          uri:
            img ||
            'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
        }}
      />
      <View style={styles.txtContainer}>
        <Text style={[GlobalText.h3]}> {name} </Text>
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
