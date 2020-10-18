import React from 'react';
import AppProvider from './state/context';
import { enableScreens } from 'react-native-screens';
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
import {
  COUPON,
  DEALS,
  ERROR,
  HOME,
  ITEM,
  ORDER,
  RECENT,
  MENULIST,
  MORE,
  QRCODE,
} from './global/reserveWord';

const Stack = createStackNavigator();
enableScreens();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={HOME}>
          {/**Main Screen */}
          <Stack.Screen name={HOME} component={Home} />
          {/*Think about when is it benefical to pass param on the screen level*/}
          <Stack.Screen
            name={ORDER}
            component={Order}
            option={({ route }) => ({ title: route.params.title })}
          />
          <Stack.Screen name={DEALS} component={Deals} />
          <Stack.Screen name={RECENT} component={Recent} />
          <Stack.Screen name={MORE} component={More} />
          {/** Call to Action screen */}
          <Stack.Screen
            name={COUPON}
            component={Coupon}
            options={({ route }) => ({ title: route.params.title })}
          />
          <Stack.Screen
            name={QRCODE}
            component={QRCode}
            options={({ route }) => ({ title: 'specificOption?' })}
          />
          <Stack.Screen
            name={ITEM}
            component={Item}
            options={({ route }) => ({ title: ITEM })}
          />
          <Stack.Screen
            name={MENULIST}
            component={MenuList}
            options={({ route }) => ({ title: route.params.title })}
          />
          {/** Info Screen */}
          <Stack.Screen name={ERROR} component={ErrorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

//https://stackoverflow.com/questions/55264425/is-there-a-fixed-header-or-sticky-header-for-react-native
