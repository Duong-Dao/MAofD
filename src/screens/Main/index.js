import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import {
  FlatList, Image,
  ScrollView, Text, TextInput,
  TouchableOpacity, View, ActivityIndicator
} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import Swiper from 'react-native-swiper'
import styles from './MainStyles'



const options = [
  { id: "1", icon: "", name: "Nhạc mới" },
  { id: "2", icon: "", name: "Thể loại" },
  { id: "3", icon: "", name: "Top 100" },
  { id: "4", icon: "", name: "Podcast" },
  { id: "5", icon: "", name: "Karaoke" },
  { id: "6", icon: "", name: "Vip" },
  { id: "7", icon: "", name: "Top MV" },
  { id: "8", icon: "", name: "Sự kiện" }
]


const Main = () => {
  const navigation = useNavigation()


  const [playList, setPlayList] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [banner, setBanner] = useState([])
  const [vietnamSong, setVietnamSong] = useState([])
  const [asiaSong, setAsiaSong] = useState([])
  const [europeSong, setEuropeSong] = useState([])
  const [concertSong, setConcertSong] = useState([])
  const typingSearch = useRef(null)

  const fetchPlayList = async () => {
    await axios.get("https://music-player-pink.vercel.app/api/top100")
      .then(res => {
        setPlayList(res.data.data[0].items)
        setVietnamSong(res.data.data[1].items)
        setAsiaSong(res.data.data[2].items)
        setEuropeSong(res.data.data[3].items)
        setConcertSong(res.data.data[4].items)
      })
  }

  const fetchBanner = async () => {
    await axios.get("https://music-player-pink.vercel.app/api/home?page=1")
      .then(res => {
        setBanner(res.data.data.items[0].items)
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
    fetchBanner()
  }, [])


  const renderPlayList = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.listContainer}
      //onPress={() => navigation.navigate("Top 100")}
      >
        <Image
          style={styles.imgThumbnail}
          source={{ uri: item.thumbnail }}
          resizeMode="cover" />
      </TouchableOpacity>
    )
  }

  const renderTopOptions = ({ item }) => {
    return (
      <View style={styles.topOptionItem}>
        <TouchableOpacity style={styles.btnTopOption}>
          <View style={styles.topOptionIcon}>
          </View>
          <Text style={styles.topOptionTitle}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ 
        justifyContent: "center", 
        alignItems: "center", 
        marginTop: 20 }}
        >
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.inputSearch}
            value={searchTerm}
            placeholder="Nhập tên ca sĩ, tên bài hát"
            onChangeText={e => handleChangeValueSearch(e)} />
        </View>

        <View style={styles.bannerContainer}>
          {banner.length > 0 ?
            <Swiper style={styles.wrapper}
              loop={true}
              autoplay={true}
              autoplayTimeout={5}
              dotStyle={{
                backgroundColor: "#fff",
                borderRadius: 999,
                opacity: 0.3,
                bottom: -25
              }}
              activeDotStyle={{
                bottom: -25,
                backgroundColor: "#fff",
                opacity: 0.8,
                borderRadius: 999
              }}
            >
              {banner.map((item) => {
                return (
                  <View style={styles.banner} key={item.encodeId}>
                    <Image source={{ uri: item.banner }}
                      resizeMode="cover"
                      style={styles.bannerImg} />
                  </View>
                )
              })}
            </Swiper>
            :
            <View style={[styles.banner, { justifyContent: "center", alignItems: "center" }]}>
              <ActivityIndicator size="large" color="#000"/>
            </View>
          }
        </View>

        <View style={styles.topOptionContainer}>
          <FlatList
            data={options}
            keyExtractor={item => item.id}
            renderItem={renderTopOptions}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.recomendedContainer}>
          <Text style={styles.textHeader2}>Nổi bật</Text>
          <FlatList
            data={playList}
            keyExtractor={(item) => item.encodeId}
            renderItem={({ item }) => renderPlayList({ item })}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>


        <View style={styles.recomendedContainer}>
          <Text style={styles.textHeader2}>Nhạc Việt Nam</Text>
          <FlatList
            data={vietnamSong}
            keyExtractor={(item) => item.encodeId}
            renderItem={({ item }) => renderPlayList({ item })}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>


        <View style={styles.recomendedContainer}>
          <Text style={styles.textHeader2}>Nhạc Châu Á</Text>
          <FlatList
            data={asiaSong}
            keyExtractor={(item) => item.encodeId}
            renderItem={({ item }) => renderPlayList({ item })}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>


        <View style={styles.recomendedContainer}>
          <Text style={styles.textHeader2}>Nhạc Âu Mỹ</Text>
          <FlatList
            data={europeSong}
            keyExtractor={(item) => item.encodeId}
            renderItem={({ item }) => renderPlayList({ item })}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>


        <View style={styles.recomendedContainer}>
          <Text style={styles.textHeader2}>Nhạc Hoà Tấu</Text>
          <FlatList
            data={concertSong}
            keyExtractor={(item) => item.encodeId}
            renderItem={({ item }) => renderPlayList({ item })}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
      <View style={styles.playBottomContainer}>
        <Ionicons name="play-skip-back-circle-outline" size={35} color="black" />
        <Ionicons name="play-circle-outline" size={50} color="black" />
        <Ionicons name="play-skip-forward-circle-outline" size={35} color="black" />
      </View>
    </View>
  )
}

export default Main
