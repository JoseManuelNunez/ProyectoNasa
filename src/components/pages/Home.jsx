import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../molecules/Header'
import TodaysImage from '../molecules/TodaysImage';
import { useImageLoader } from '../../hooks/useImageLoader';
import LastFiveDaysImages from '../molecules/LastFiveDaysImages';

export default function Home() {
  const { todaysImage, lastFiveDaysImage } = useImageLoader();

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages LastFiveDaysImages={lastFiveDaysImage} />
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