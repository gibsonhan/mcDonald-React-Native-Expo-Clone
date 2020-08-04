import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import GlobalText from '../style/Text';

const temp = [{ title: 'one' }, { title: 'two' }, { title: 'three' }];

const Reorder = ({ navigation }) => {
  const navigate = () => navigation.navigate('Recent');
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={GlobalText.h3}> Quickly Reorder </Text>
        <TouchableOpacity
          style={{ justifyContent: 'center' }}
          onPress={navigate}
        >
          <Text style={[GlobalText.r, { color: 'blue' }]}>View All ></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={temp}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => <Text>item.title</Text>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listContainer: {},
});

export default Reorder;
