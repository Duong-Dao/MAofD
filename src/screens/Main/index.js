import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
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

const bannerName = [
  { id: "1", name: "Slide 1" },
  { id: "2", name: "Slide 2" },
  { id: "3", name: "Slide 3" },
  { id: "4", name: "Slide 4" },
  { id: "5", name: "Slide 5" },
  { id: "6", name: "Slide 6" },
  { id: "7", name: "Slide 7" },

]


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

  const renderTopOptions = ({ item }) => {
    return (
      <View style={{ height: 70, width: 70, justifyContent: "center", alignItems: "center", margin: 5 }}>
        <TouchableOpacity>
          <View style={{ width: 50, height: 50, backgroundColor: "magenta", borderRadius: 15 }}>
          </View>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.inputSearch}
            value={searchTerm}
            placeholder="Nhập tên ca sĩ, tên bài hát"
            onChangeText={e => handleChangeValueSearch(e)} />
        </View>

        <View style={styles.bannerContainer}>
          <Swiper style={styles.wrapper}
            loop={true}
            autoplay={true}
            autoplayTimeout={5}
            dotStyle={{
              backgroundColor: "#fff",
              borderRadius: 999,
              opacity: 0.3,
            }}
          >
            {bannerName.map((item) => {
              return (
                <View style={styles.banner} key={item.id}>
                  <Text style={styles.bannerName}>{item.name}</Text>
                </View>
              )
            })}
          </Swiper>
        </View>

        <View style={{ flex: 1, paddingLeft: 15, marginTop: 10 }}>
          <FlatList
            data={options}
            keyExtractor={item => item.id}
            renderItem={renderTopOptions}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.recomendedContainer}>
          <Text style={styles.textHeader2}>Top 100</Text>
          <FlatList
            data={playList}
            keyExtractor={(item) => item.encodeId}
            renderItem={({ item }) => renderPlayList({ item })}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
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
    </ScrollView>
  )
}

export default Main
