import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Top100Styles'
import axios from 'axios'

import Ionicons from "react-native-vector-icons/Ionicons"

const Top100 = () => {

  // const [outstandingSong, setOutstandingSong] = useState([])
  // const [vietnamSong, setVietnamSong] = useState([])
  // const [asiaSong, setAsiaSong] = useState([])
  // const [europeSong, setEuropeSong] = useState([])
  // const [concertSong, setConcertSong] = useState([])
  const [totalData, setTotalData] = useState([])


  const fetchTop = async () => {
    await axios.get("https://music-player-pink.vercel.app/api/top100")
      .then(res => {
        setTotalData(res.data.data)
        // setOutstandingSong(res.data.data[0].items)
        // setVietnamSong(res.data.data[1].items)
        // setAsiaSong(res.data.data[2].items)
        // setEuropeSong(res.data.data[3].items)
        // setConcertSong(res.data.data[4].items)
      })
  }

  useEffect(() => {
    fetchTop()
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


  const renderTop = (el) => {
    const { title, items } = el
    // console.log("hahahaha", el);
    return (
      <View style={styles.recomendedContainer}>
        <Text style={styles.textHeader2}>{title}</Text>
        {/* <FlatList
          data={items}
          keyExtractor={(item) => item.encodeId}
          renderItem={({ item }) => renderPlayList({ item })}
          showsHorizontalScrollIndicator={false}
          horizontal
        /> */}
        <ScrollView
          contentContainerStyle={{ flexDirection: "row" }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {items.map((item, index) => {
            if (index >= 5) return null
            return (
              <TouchableOpacity
                key={index}
                style={styles.listContainer}
              //onPress={() => navigation.navigate("Top 100")}
              >
                <Image
                  style={styles.imgThumbnail}
                  source={{ uri: item.thumbnail }}
                  resizeMode="cover" />
              </TouchableOpacity>
            )
          })}

          {items.length > 5 &&
            <View style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 25
            }}>
              <TouchableOpacity
                key={1000}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 999,
                  borderWidth: 1,
                  borderColor: "#000",
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                <Ionicons name="arrow-forward-outline" size={24} color="#000" />
              </TouchableOpacity>
              <Text>Xem tất cả</Text>
            </View>
          }
        </ScrollView>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text>Top Header</Text>
      </View>
      <View style={{ flex: 8 }}>
        <ScrollView>
          {
            totalData.map((item) => {
              return (
                <View>{renderTop(item)}</View>
              )
            })
          }
        </ScrollView>
      </View>
    </View>
  )
}

export default Top100