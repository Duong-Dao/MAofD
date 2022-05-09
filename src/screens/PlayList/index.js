import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, FlatList, ActivityIndicator, Image } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from './PlayListStyles'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'



const PlayList = ({ route }) => {

  const navigation = useNavigation()
  const idSong = route.params.key.encodeId
  // console.log(route.params);
  const [song, setSong] = useState([])
  const [isPlay, setIsPlay] = useState(false)


  const renderItemInList = ({ item }) => {

    return (
      <TouchableOpacity
        style={styles.btnItemListSong}
        onPress={() => navigation.navigate("Player", { song: item })}>
        <Image style={styles.songArtwork}
          source={{ uri: item.thumbnail }}
          resizeMode="cover" />
        <Text style={styles.songTitle}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  const getSongById = async () => {
    await axios.get(`https://music-player-pink.vercel.app/api/playlist?id=${idSong}`)
      .then(res => {
        setSong(res.data.data.song.items)
      })
  }

  useEffect(() => {
    getSongById()
  }, [])


  return (
    <View style={styles.container}>
      {/* <View style={styles.containerHeader}>
        <Text style={styles.txtHeader}>PlayList</Text>
      </View> */}
      <View style={styles.containerList}>
        {song.length > 0 ?
          <View style={styles.containerList}>
            <FlatList
              data={song}
              // pagingEnabled={true}
              keyExtractor={i => i.encodeId}
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

export default PlayList