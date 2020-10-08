import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SingleCard from './common/SingleCard';
import GlobalText from '../style/Text';

import { TREND } from '../global/reserveWord';
import { fetchList } from '../util/service';

const Trending = ({ navigation }) => {
  const [trendCard, setTrendCard] = useState([]);

  useEffect(() => {
    async function fetchTrendCard() {
      let response = await fetchList(TREND);
      setTrendCard(response);
    }

    fetchTrendCard();
  }, []);

  if (trendCard.length < 0) {
    return <></>;
  }

  return (
    <View styles={styles.mainContainer}>
      <Text style={[GlobalText.h1, { margin: 20 }]}>Trending</Text>
      {trendCard.map((card, idx) => (
        <SingleCard key={idx} props={card} navigation={navigation} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
});

export default Trending;
