import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../molecules/Header';

export default function Home() {

  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7,26,93,255)',
  },
});