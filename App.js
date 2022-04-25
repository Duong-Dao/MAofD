import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PlayList, Login } from './src/screens'
import Stacks from "./src/navigation/stacks"

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      {/* <Stacks /> */}
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});