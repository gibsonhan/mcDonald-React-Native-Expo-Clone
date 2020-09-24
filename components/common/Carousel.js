import React from 'react';
import { ScrollView, Image, Text, View, StyleSheet } from 'react-native';
import GlobalText from '../../style/Text';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Carousel = ({ items, navigation }) => {
  console.log('chekcking items', items);
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
  const { img, name } = props;
  const navigate = () => navigation.navigate('MenuList', props);
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={navigate}>
      <Image style={styles.image} />
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
