import React, { useState, useEffect } from 'react';

import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Btn from '../components/common/Btn';

import GlobalText from '../style/Text';
import GlobalColor from '../style/Color';
import { Directions } from 'react-native-gesture-handler';

const Item = ({ route }) => {
  const customized = true; // if the object has customize then add true
  const [fav, setFav] = useState(false);

  const handleFavCAT = () => {
    console.log('hello world');
    setFav((prev) => !prev);
  };

  const favCATText = !fav ? 'Favorite' : 'UnFavorite';

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.header__goBack}>
          <Text>X</Text>
        </TouchableOpacity>
        <Text>{'Name-of-Item'}</Text>
        <View style={styles.header__itemInfo}>
          <Text>{'Price'}</Text>
          <Text>{'Calories'}</Text>
        </View>
        <TouchableOpacity style={styles.header__favCAT} onPress={handleFavCAT}>
          <Text>{favCATText}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <QuanityButton />
        <Btn text="Cutomize Ingridents" color={GlobalColor.yellow} />
      </View>
      <View style={styles.infoContainer}>
        <Btn text="Nutrition & Ingredients" color={GlobalColor.yellow} />
        <Text>
          2000 calories a day is used for general nutrition advice, but calore
          needs vary. Additional nutrition information avavailable upon request.
          Calories shown do not reflect customization
        </Text>
      </View>
      <View style={styles.catContainer}>
        <Btn text="Add To Bag" color={GlobalColor.yellow} />
      </View>
    </View>
  );
};

const QuanityButton = () => {
  const [quant, setQuant] = useState(1);
  const handlePlus = () => {
    setQuant((prev) => prev + 1);
  };

  const handleSubtract = () => {
    setQuant((prev) => {
      return prev === 1 ? 1 : prev - 1;
    });
  };
  return (
    <View style={styles.quantContainer}>
      <TouchableOpacity style={styles.sub} onPress={handleSubtract}>
        <Text style={[GlobalText.l]}> - </Text>
      </TouchableOpacity>
      <View style={[GlobalText.l, styles.count]}>{quant}</View>
      <TouchableOpacity style={styles.plus} onPress={handlePlus}>
        <Text style={[GlobalText.l]}> + </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 24,
  },
  headerContainer: {
    flex: 1.5,
    backgroundColor: 'green',
  },
  header__goBack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    backgroundColor: 'red',
    margin: 10,
  },
  header__itemInfo: {
    flexDirection: 'row',
  },
  header__favCAT: {
    flexDirection: 'row',
  },
  imgContainer: {
    flex: 3,
    backgroundColor: 'blue',
  },
  img: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor: 'yellow',
  },
  infoContainer: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  catContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  quantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
    height: 50,
    borderWidth: 1.25,
    borderRadius: 25,
  },
  sub: {
    flex: 1,
    alignItems: 'center',
  },
  quant: {
    flex: 1,
    backgroundColor: 'red',
  },
  plus: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Item;
