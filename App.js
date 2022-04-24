import React from 'react';
import { StyleSheet, View } from 'react-native';
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