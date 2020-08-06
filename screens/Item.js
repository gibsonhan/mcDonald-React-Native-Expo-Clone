import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Item = () => {
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
      {displayFav && <AddToFav />}
      {!displayFav && <Favorite />}
    </TouchableOpacity>
  );
};

const AddToFav = () => {
  <View>
    <Text> Hallow Star</Text>
    <Text> Add To Favorite </Text>
  </View>;
};

const Favorite = () => {
  <View>
    <Text>Start Animation</Text>
    <Text> Favorited</Text>
  </View>;
};

const QuantityCAT = () => {
  const [quant, setQuant] = useState(1);
  function updateQuantity(type) {
    type === 'increate'
      ? setQuant((prev) => prev + 1)
      : setQuant((prev) => {
          return prev === 0 ? 0 : prev - 1;
        });
  }
  return (
    <View>
      <Text>Quantity</Text>
      <View>
        <TouchableOpacity>
          {' '}
          <Text> - </Text>
        </TouchableOpacity>
        <Text>{quant} </Text>
        <TouchableOpacity>
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
