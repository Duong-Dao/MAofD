import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Login from './src/screens/Login';
import MusicPlayer from './src/screens/MusicPlayer';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <MusicPlayer /> */}
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

});