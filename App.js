import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import PlayList from './src/screens/PlayList'
import Splash from './src/screens/Splash'
import Stacks from "./src/navigation/stacks"
import Main from './src/screens/Main'
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});