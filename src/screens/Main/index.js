import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from './MainStyles'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const Main = () => {
  const navigation = useNavigation()

  const [playList, setPlayList] = useState([])

  const fetchPlayList = async () => {
    await axios.get("https://music-player-pink.vercel.app/api/top100")
      .then(res => {
        setPlayList(res.data.data[0].items)
      })
  }

  useEffect(() => {
    fetchPlayList()
  }, [])


  const renderPlayList = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() => navigation.navigate("PlayList", { key: item })}>
        <Image
          style={{ borderRadius: 10, height: 200, width: 200 }}
          source={{ uri: item.thumbnail }}
          resizeMode="cover" />
      </TouchableOpacity>
    )
  }
  const onViewableItemsChanged = ({ viewableItems, changed }) => {
    console.log("Visible items are", viewableItems);
    console.log("Changed in this iteration", changed);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>PlayList</Text>
      <View style={styles.favoritesContainer}>
        <Text>Favorites</Text>
      </View>
      <View style={styles.recomendedContainer}>
        <Text style={styles.textHeader2}>Recomended</Text>
        <FlatList
          data={playList}
         
          keyExtractor={(item) => item.encodeId}
          renderItem={({ item }) => renderPlayList({ item })}
          showsHorizontalScrollIndicator={false}
          horizontal
          
        />
      </View>
      <View style={styles.playBottomContainer}>
        <Ionicons name="play-skip-back-circle-outline" size={35} color="black" />
        <Ionicons name="play-circle-outline" size={50} color="black" />
        <Ionicons name="play-skip-forward-circle-outline" size={35} color="black" />
      </View>
    </View>
  );
};

export default Main
