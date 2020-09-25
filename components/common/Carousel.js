import React from 'react';
import { ScrollView, Image, Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import GlobalText from '../../style/Text';

const Carousel = ({ items, navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        horizontal={true}
        decelerationRate="fast"
        //onContentSizeChange={(w, h) => console.log(w, h)} --> not sure how this fits in with resizeing
        contentContainerStyle={{ width: 200 }}
        scrollEventThrottle={200}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      >
        {items.map((item, i) => (
          <Item key={i} props={item} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};

const Item = ({ props, navigation }) => {
  const { img, name, navLink } = props;
  const navigate = () =>
    navigation.navigate(navLink, { title: name, data: props });
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={navigate}>
      <Image
        style={styles.image}
        source={{
          uri:
            img ||
            'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
        }}
      />
      <Text style={[GlobalText.r, styles.text]}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: 'yellow',
    borderRadius: 10,
    height: 160,
    width: 160,
  },
  text: {
    marginTop: 4,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'column',
    height: 180,
    width: 160,
    marginRight: 10,
  },
});

export default Carousel;
