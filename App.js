import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MusicPlayer from './src/screens/MusicPlayer';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MusicPlayer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});