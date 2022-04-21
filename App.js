import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Login from './src/screens/Login';
import MusicPlayer from './src/screens/MusicPlayer';
import Tabs from './src/navigation/tabs';

export default function App() {
  return (
    <View style={styles.container}>
      <Tabs />
    </View>
    //     {/* <MusicPlayer /> */ }
    // {/* <Login /> */ }

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

});