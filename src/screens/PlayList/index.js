import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from './PlayListStyles'




export default function PlayList() {


  const songs = [
    { id: 1, name: "item 1", duration: 100 },
    { id: 2, name: "item 2", duration: 100 },
    { id: 3, name: "item 3", duration: 100 },
    { id: 4, name: "item 4", duration: 100 },
    { id: 5, name: "item 5", duration: 100 },
    { id: 6, name: "item 6", duration: 100 },
    { id: 7, name: "item 7", duration: 100 },
    { id: 8, name: "item 8", duration: 100 },
    { id: 9, name: "item 9", duration: 100 },
    { id: 10, name: "item 10", duration: 100 },
    { id: 11, name: "item 11", duration: 100 },
    { id: 12, name: "item 12", duration: 100 },
    { id: 13, name: "item 13", duration: 100 },
  ]

  const [dataSong, setDataSong] = useState([])
  const [isPlay, setIsPlay] = useState(false)
  const renderItemInList = ({ item }) => {
    return (
      <View style={styles.btnItemListSong}>
        <View>
          <Text>{item.name}</Text>
          <Text>{item.duration}</Text>
        </View>
        <TouchableOpacity onPress={() => { }}>
          <Ionicons name="ios-play-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    )
  }

  useEffect(() => {
    // fetching data
    const timerGetSongs = setTimeout(() => {
      setDataSong(songs)
    }, 15000)
    return () => clearTimeout(timerGetSongs)

  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.txtHeader}>PlayList</Text>
      </View>
      <View style={styles.containerList}>
        {dataSong.length > 0 ?
          <View style={styles.containerList}>
            <FlatList
              data={dataSong}
              keyExtractor={i => i.id}
              renderItem={renderItemInList}
              showsVerticalScrollIndicator={false} />
          </View>
          :
          <View style={styles.containerList}>
            <Text>No Data</Text>
            <ActivityIndicator size="large" />
          </View>
        }
      </View>
    </View>
  )
}