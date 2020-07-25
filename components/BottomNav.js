import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const bottomNav = [
  { title: 'Home', svg: '' },
  { title: 'Order', svg: '' },
  { title: 'Deals', svg: '' },
  { title: 'Recent', svg: '' },
  { title: 'More', svg: '' },
];

const BottomNav = () => {
  return (
    <View style={styles.mainContainer}>
      {bottomNav.map((nav, idx) => (
        <Nav key={idx} props={nav} />
      ))}
    </View>
  );
};

export default BottomNav;

const Nav = ({ props }) => {
  const { title, svg } = props;
  return (
    <View style={styles.navContainer}>
      <Text style={styles.svg}>{svg}</Text>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: 800,
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  svg: {
    height: 50,
    width: 60,
    backgroundColor: 'grey',
    textAlign: 'center',
  },
  navContainer: {
    height: 60,
    width: 60,
    backgroundColor: 'yellow',
    textAlign: 'center',
  },
});
