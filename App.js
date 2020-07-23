import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import AnnoucementCard from './components/AnnoucmentCard';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AnnoucementCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
