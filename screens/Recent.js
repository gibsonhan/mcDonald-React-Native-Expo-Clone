import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import GlobalText from '../style/Text';
import GlobalColor from '../style/Color';

const Recent = ({ navigation }) => {
  const [displayRecent, setDisplayRecent] = useState(false);
  const [displayColor, setDisplayColor] = useState({
    recent: {
      color: 'grey',
    },
    fav: {
      color: 'red',
    },
  });

  useEffect(() => {
    displayRecent === false
      ? setDisplayColor({
          recent: {
            color: 'grey',
          },
          fav: {
            color: 'red',
          },
        })
      : setDisplayColor({
          recent: {
            color: 'red',
          },
          fav: {
            color: 'grey',
          },
        });
  }, [displayRecent]);

  return (
    <View style={styles.mainContainer}>
      <Text style={[GlobalText.h3, { marginVertical: 20 }]}>
        My Recents And Favorite
      </Text>
      <View style={styles.toggleContainer}>
        <View style={styles.toggleTextContainer}>
          <TouchableOpacity onPress={() => setDisplayRecent(true)}>
            <Text style={[GlobalText.h3, displayColor.recent, { padding: 10 }]}>
              Recent Orders
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setDisplayRecent(false)}>
            <Text style={[GlobalText.h3, displayColor.fav, { padding: 10 }]}>
              Favorites
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.toggleBarContainer}>
          <Text>{console.log(displayColor.fav.color)}</Text>
          <View
            style={{
              backgroundColor: [displayColor.recent.color],
              height: '100%',
              width: '50%',
            }}
          />
          <View
            style={{
              backgroundColor: [displayColor.fav.color],
              height: '100%',
              width: '50%',
            }}
          />
        </View>
      </View>
      <View style={styles.listContainer}>
        {/** SLIDER -> needs to be implement */}
        {displayRecent && <RecentOrder />}
        {!displayRecent && <FavoriteList navigation={navigation} />}
      </View>
    </View>
  );
};

const RecentOrder = ({ navigation }) => {
  const navigate = () =>
    navigation.reset({ index: 0, routes: [{ name: 'Order' }] });

  return (
    <View>
      <Text>Recent</Text>
      <FlatList
        data={[0, 1, 2, 3, 4, 5, 6]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <RecentOrderCard />}
        ListFooterComponent={
          <TouchableOpacity onPress={navigate}>
            <Text style={{ color: 'blue' }}>View Menu</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const FavoriteList = ({ navigation }) => {
  const [favEmpty, setFavEmpty] = useState(true);
  const data = [0, 1, 2, 3, 4, 5, 6];
  useEffect(() => {
    data.length === 0 ? setFavEmpty(true) : setFavEmpty(false);
  }, [data.length]);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <RecentOrderCard />}
      />
      {favEmpty && <EmptyFavorite navigation={navigation} />}
    </View>
  );
};

const EmptyFavorite = ({ navigation }) => {
  const navigate = () =>
    navigation.reset({ index: 0, routes: [{ name: 'Order' }] });
  return (
    <View style={styles.emptyFavContainer}>
      <Text style={[GlobalText.l, { textAlign: 'center' }]}>
        It looks like you don't have any favorites yet.
      </Text>
      <Text
        style={[GlobalText.r, { color: GlobalColor.grey, textAlign: 'center' }]}
      >
        Start an order to add your faves along the way. or head to recent order
        and save your faves for later
      </Text>
      <TouchableOpacity onPress={navigate}>
        <Text style={{ color: 'blue' }}>Start an Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const RecentOrderCard = () => {
  //look at the menu drop down tutorial
  let orderlist = [0, 1, 2, 3];
  const showOrderList = orderlist.length > 1 ? true : false;
  return (
    <View>
      <Text> Past Order</Text>
      <Text>Date of purchate - Time of Purchase</Text>
      {showOrderList && (
        <TouchableOpacity>
          <Text>View Order</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const RecentItem = () => {
  return (
    <View>
      <View>
        <Text>Image</Text>
        <Text>Customization</Text>
      </View>
      <View>
        <Text>Start</Text>
        <TouchableOpacity>
          <Text>Add to Favorites</Text>
          <Text>Favorited</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  toggleContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    width: '90%',
  },
  toggleTextContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',

    backgroundColor: 'yellow',
  },
  toggleBarContainer: {
    flexDirection: 'row',
    height: 10,
    backgroundColor: 'blue',
  },
  toggleBarRecent: {},
  toggleBarFav: {},
  listContainer: {
    backgroundColor: 'yellow',
  },
  emptyFavContainer: {
    paddingHorizontal: 50,
    maxWidth: 500,
    minHeight: 200,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default Recent;
