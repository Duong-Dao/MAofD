import React, { useEffect, useState, useRef } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View, TextInput } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from './MainStyles'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'


const Main = () => {
  const navigation = useNavigation()


  const [playList, setPlayList] = useState([])
  const [searchTerm, setSearchTerm] = useState("")


  const typingSearch = useRef(null)

  const fetchPlayList = async () => {
    await axios.get("https://music-player-pink.vercel.app/api/top100")
      .then(res => {
        setPlayList(res.data.data[0].items)
      })
  }

  const handleSearch = (value) => {
    let keyword = value.split(" ").join("-")

    if (keyword === "") return

    axios.get(`https://music-player-pink.vercel.app/api/search?keyword=${keyword}`)
      .then(res => {
        console.log("ressss", res.data.data.top["title"]);
      })
  }

  const handleChangeValueSearch = (valueSearch) => {

    setSearchTerm(valueSearch)

    if (typingSearch.current) {
      clearTimeout(typingSearch.current)
    }

    typingSearch.current = setTimeout(() => {
      handleSearch(valueSearch)
    }, 500)

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
          style={styles.imgThumbnail}
          source={{ uri: item.thumbnail }}
          resizeMode="cover" />
      </TouchableOpacity>
    )
  }


  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.inputSearch}
          value={searchTerm}
          placeholder="Nhập tên ca sĩ, tên bài hát"
          onChangeText={e => handleChangeValueSearch(e)} />
      </View>
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
  )
}

export default Main
