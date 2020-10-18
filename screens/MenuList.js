import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

import GlobalText from '../style/Text';
import GlobalColor from '../style/Color';
import { MENU } from '../global/reserveWord';

import tempData from '../data/menuList';
import { fetchList } from '../util/service';
import { ITEM, ORDER } from '../global/reserveWord';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAppContext } from '../state/context';

const MenuList = ({ route, navigation, props }) => {
  const { state } = useAppContext();
  const { subMenu } = route.params.data;
  const ITEMS = state[ITEM];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.listContainer}>
        {subMenu.map((menu) => {
          //create an array with submenID
          let subMenuId = menu.items.map((item) => item.id);
          //create a new array, with additional information of ids
          let data = ITEMS.filter((item) => subMenuId.includes(item.id));
          return (
            <FlatList
              data={data}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => {
                return <MenuItem props={item} navigation={navigation} />;
              }}
              ListHeaderComponent={
                subMenu.length > 1 && <Text>{menu.name}</Text>
              }
            />
          );
        })}
        <WantSomethingElse navigation={navigation} />
      </View>
    </View>
  );
};

const MenuItem = ({ props, navigation }) => {
  const { name } = props;
  const navigate = () =>
    navigation.navigate(ITEM, {
      title: props.name,
      data: props,
    });
  return (
    <TouchableOpacity style={styles.menuItemContainer} onPress={navigate}>
      <Image
        style={styles.menuItemImage}
        source={{
          uri: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
        }}
      />
      <View style={styles.menuItemText}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

//TODO is to design some cool UI and breaking down at the mcDonald makeup
const WantSomethingElse = ({ navigation }) => {
  const navigateOrder = () => navigation.navigate(ORDER);
  return (
    <View style={styles.textContainer}>
      <Text> Want Something Else?</Text>
      <Text style={GlobalText.h4} onPress={navigateOrder}>
        {' '}
        View Full Menu >
      </Text>
      <Text>
        {' '}
        2000 calories a day is used for generatoin advice, but calorie needs
        vary. Additional nutrition information available upon request. Calories
        Shown do not reflect Customization
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {},
  listContainer: {
    flex: 4,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    margin: 20,
  },
  menuItemContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: `${GlobalColor.mdGrey}`,
  },
  menuItemImage: {
    height: 100,
    width: 100,
    backgroundColor: 'yellow',
  },
  menuItemText: {
    marginHorizontal: 10,
    justifyContent: 'space-evenly',
  },
  featured: {},
});

export default MenuList;
