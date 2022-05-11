import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, FlatList, ActivityIndicator, Image } from 'react-native'
// import Ionicons from "react-native-vector-icons/Ionicons"
import styles from './PlayListStyles'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'



const PlayList = ({ route }) => {

  const navigation = useNavigation()
  const idSong = route.params.key.encodeId
  const [song, setSong] = useState([])

  const handleChangeView = () => {
    navigation.navigate("Player", { song: item })
  }

  const renderItemInList = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.btnItemListSong}
        onPress={handleChangeView}>
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
      <View style={styles.containerList}>
        {song.length > 0 ?
          <View style={styles.containerList}>
            <FlatList
              data={song}
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