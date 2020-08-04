import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Order from './screens/Order';
import Deals from './screens/Deals';
import Recent from './screens/Recent';
import More from './screens/More';
import ErrorScreen from './screens/Error';

import Coupon from './screens/Coupon';
import QRCode from './screens/QRCode.js';
import Item from './screens/Item.js';

import MenuList from './screens/MenuList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/**Main Screen */}
        <Stack.Screen name="Home" component={Home} />
        {/*Think about when is it benefical to pass param on the screen level*/}
        <Stack.Screen
          name="Order"
          component={Order}
          option={({ route }) => ({ title: route.params.tile })}
        />
        <Stack.Screen name="Deals" component={Deals} />
        <Stack.Screen name="Recent" component={Recent} />
        <Stack.Screen name="More" component={More} />
        {/** Call to Action screen */}
        <Stack.Screen
          name="Coupon"
          component={Coupon}
          options={({ route }) => ({ title: route.params.title })}
        />
        <Stack.Screen
          name="QRCode"
          component={QRCode}
          options={({ route }) => ({ title: 'specificOption?' })}
        />
        <Stack.Screen
          name="Item"
          component={Item}
          options={({ route }) => ({ title: 'ItemOption' })}
        />
        <Stack.Screen
          name="MenuList"
          component={MenuList}
          options={({ route }) => ({ title: route.params.title })}
        />
        {/** Info Screen */}
        <Stack.Screen name="Error" component={ErrorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//https://stackoverflow.com/questions/55264425/is-there-a-fixed-header-or-sticky-header-for-react-native
