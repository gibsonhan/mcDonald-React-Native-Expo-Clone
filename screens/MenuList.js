import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

import GlobalText from '../style/Text';
import GlobalColor from '../style/Color';
import { MENU } from '../global/reserveWord';

import tempData from '../data/menuList';
import { fetchList } from '../util/service';
import { ITEM, ORDER } from '../global/reserveWord';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MenuList = ({ route, navigation, props }) => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    let subMenus = route.params.data;
    console.log(subMenus);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.listContainer}>
        <FlatList
          data={menu}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <MenuItem props={item} navigation={navigation} />
          )}
          ListFooterComponent={<WantSomethingElse navigation={navigation} />}
        />
      </View>
    </View>
  );
};

const MenuItem = ({ props, navigation }) => {
  return (
    <TouchableOpacity style={styles.menuItemContainer} onPress={navigate}>
      <Image
        style={styles.menuItemImage}
        source={{
          uri: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
        }}
      />
      <View style={styles.menuItemText}></View>
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
