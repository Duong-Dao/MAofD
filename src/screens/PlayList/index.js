import React, { useState, useEffect } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import styles from "./PlayListStyles"
import { Ionicons } from "react-native-vector-icons"

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

  const [dataSong, setDataSong] = useState(songs)

  const renderItemInList = ({ item }) => {
    return (
      <View style={styles.btnItemListSong}>
        <Text>{item.name}</Text>
        <Text>{item.duration}</Text>
        <Ionicons name="ios-play-outline" size={24} color="black" />
      </View>
    )
  }



  useEffect(() => {
    //fetching data
    // const timerGetSongs = setTimeout(() => {
    //   console.log("timer get songs");
    //   setDataSong(songs)
    // }, 15000)
    // return () => clearTimeout(timerGetSongs)

  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text>
          View header
        </Text>
      </View>
      <View style={{ height: 15, backgroundColor: "#ffffff" }} />
      {/* {dataSong.length > 0 ? */}
      <View style={styles.containerList}>
        {/* <Text>FlatList render list</Text> */}
        <FlatList
          data={dataSong}
          keyExtractor={i => i.id}
          renderItem={renderItemInList}
          showsVerticalScrollIndicator={false} />
      </View>

      {/*or <View style={styles.containerList}>
          <Text>No Data</Text>
        </View> */}
      {/* } */}
    </View>
  )
}