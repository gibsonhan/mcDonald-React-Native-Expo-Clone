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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Deals">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Deals" component={Deals} />
        <Stack.Screen name="Recent" component={Recent} />
        <Stack.Screen name="More" component={More} />
        <Stack.Screen name="Error" component={ErrorScreen} />
        <Stack.Screen name="Coupon" component={Coupon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//https://stackoverflow.com/questions/55264425/is-there-a-fixed-header-or-sticky-header-for-react-native
