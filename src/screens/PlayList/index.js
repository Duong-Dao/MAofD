import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, FlatList, ActivityIndicator, Image } from 'react-native'
// import Ionicons from "react-native-vector-icons/Ionicons"
import styles from './PlayListStyles'
import { useNavigation } from '@react-navigation/native'



export default function PlayList({ route }) {

  console.log("Route", route.params);

  const navigation = useNavigation()

  const [playList, setPlayList] = useState([])
  const [isPlay, setIsPlay] = useState(false)
  const renderItemInList = ({ item }) => {
    return (
      <View style={styles.btnItemListSong}>
        <View>
          <Image style={{
            borderRadius: 10
          }}
            source={{ uri: item.thumbnail }}
            resizeMode="cover" />
          <Text>{item.title}</Text>
        </View>

      </View>
    )
  }

  useEffect(() => async () => {
    const res = await fetch("https://music-player-pink.vercel.app/api/top100")
    const data = await res.json()
    // console.log("daaaaaa", data.data[0].items)
    setPlayList(data.data[0].items)
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.txtHeader}>PlayList</Text>
      </View>
      <View style={styles.containerList}>
        {playList.length > 0 ?
          <View style={styles.containerList}>
            <FlatList
              data={playList}
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