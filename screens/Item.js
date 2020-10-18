import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Item = ({ route }) => {
  console.log('what is route?', route.params.data);
  const customized = true; // if the object has customize then add true
  return (
    <View style={styles.mainContainer}>
      <ItemInfo />
      {customized && <CustomizeCAT />}
      <FavoriteCAT />
      <QuantityCAT />
    </View>
  );
};

const ItemInfo = () => {
  return (
    <View>
      <Text>IMage</Text>
      <Text>DropDownMenu For Size</Text>
      <Text>Price and Calories</Text>
      <Text>Customize</Text>
    </View>
  );
};

const CustomizeCAT = () => {
  return (
    <View>
      <Text>Customize</Text>
    </View>
  );
};

const FavoriteCAT = () => {
  const [displayFav, setDisplayFav] = useState(true);
  function toggleFavorite() {
    setDisplayFav((prev) => !prev);
  }
  return (
    <TouchableOpacity onPress={() => toggleFavorite()}>
      <Text> Star</Text>
      {console.log(displayFav)}
      {displayFav && <AddToFav />}
      {!displayFav && <Favorite />}
    </TouchableOpacity>
  );
};

const AddToFav = () => {
  return (
    <View>
      <Text> Hallow Star</Text>
      <Text> Add To Favorite </Text>
    </View>
  );
};

const Favorite = () => {
  return (
    <View>
      <Text>Start Animation</Text>
      <Text> Favorited</Text>
    </View>
  );
};

const QuantityCAT = () => {
  const [quant, setQuant] = useState(1);

  function updateQuantity(type) {
    type === 'increase'
      ? setQuant((prev) => prev + 1)
      : setQuant((prev) => {
          return prev === 0 ? 0 : prev - 1;
        });
  }

  const increase = () => updateQuantity('increase');
  const decrease = () => updateQuantity('decrease');

  return (
    <View>
      <Text>Quantity</Text>
      <View>
        <TouchableOpacity onPress={decrease}>
          <Text> - </Text>
        </TouchableOpacity>
        <Text>{quant} </Text>
        <TouchableOpacity onPress={increase}>
          <Text> + </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Item;
