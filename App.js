import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Login from './src/screens/Login';
import MusicPlayer from './src/screens/MusicPlayer';
import Tabs from './src/navigation/tabs';
import Stacks from './src/navigation/stacks';
import { PlayList } from './src/screens';


export default function App() {
  return (
    <View style={styles.container}>
      <PlayList />
    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});