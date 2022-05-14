import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Stacks from "./src/navigation/stacks"
import { Favorites } from './src/screens'
export default function App() {

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {

    const timerLoading = setTimeout(() => {
      setIsLoading(false)
    }, 15000)
    return () => {
      clearTimeout(timerLoading)
    }
  }, [])

  return (
    <View style={styles.container}>
      {/* {isLoading ?
        <Splash />
        :
        <PlayList />} */}
      <Stacks />
      {/* <Favorites /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});