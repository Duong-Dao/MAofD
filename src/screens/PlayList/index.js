import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, FlatList, ActivityIndicator, Image } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from './PlayListStyles'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'



const PlayList = ({ route }) => {

  const navigation = useNavigation()
  const idPlayList = route.params.key
  const [song, setSong] = useState([])
  const arrEncodeId = []

  const handleChangeView = (item) => {
    navigation.navigate("Player", { key: item.encodeId, keyList: arrEncodeId })
  }

  const renderItemInList = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.btnItemListSong}
        onPress={() => handleChangeView(item)}>
        <Image style={styles.songArtwork}
          source={{ uri: item.thumbnail }}
          resizeMode="cover" />
        <Text style={styles.songTitle}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  const getSongById = async () => {
    await axios.get(`https://music-player-pink.vercel.app/api/playlist?id=${idPlayList}`)
      .then(res => {
        setSong(res.data.data.song.items)
      })
  }

  useEffect(() => {
    getSongById()
  }, [])

  {
    song.map((item) => {
      return arrEncodeId.push(item.encodeId)
    })
  }


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.btnBack}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="ios-chevron-back" size={35} color="#000" />
        </TouchableOpacity>
        <Text style={styles.txtHeader}>Top 100</Text>
      </View>
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
  )
}

export default PlayList