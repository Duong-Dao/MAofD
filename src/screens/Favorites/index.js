import React from 'react'
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import styles from './FavoriteStyles'
import { useNavigation } from '@react-navigation/native'

const Favorites = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Header</Text>
      </View>

      <ScrollView style={styles.favoriteListContainer}>
        <View style={{ marginTop: 20, marginBottom: 10 }}>
          <Text style={styles.titleContent}>Thư viện</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.musicLibries}>

            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity
                style={styles.btnLibraly}
                onPress={() => navigation.navigate("SongFavorites", { content: "Bài hát" })}
              >
                <View style={styles.iconLibralyContainer}>
                  <View style={styles.iconLibraly}>
                    <Ionicons name="ios-musical-notes-outline" size={25} color="#000" />
                  </View>
                  <Text style={styles.titleLibralyContent}>Bài hát</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("SongFavorites", { content: "Trên thiết bị" })}
                style={styles.btnLibraly}
              >
                <View style={styles.iconLibralyContainer}>
                  <View style={styles.iconLibraly}>
                    <Ionicons name="ios-cloud-download-outline" size={25} color="#000" />
                  </View>
                  <Text style={styles.titleLibralyContent}>Trên thiết bị</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("SongFavorites", { content: "Upload" })}
                style={styles.btnLibraly}>
                <View style={styles.iconLibralyContainer}>
                  <View style={styles.iconLibraly}>
                    <Ionicons name="ios-cloud-upload-outline" size={25} color="#000" />
                  </View>
                  <Text style={styles.titleLibralyContent}>Upload</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("SongFavorites", { content: "Karaoke" })}
                style={styles.btnLibraly}>
                <View style={styles.iconLibralyContainer}>
                  <View style={styles.iconLibraly}>
                    <MaterialCommunityIcons name="microphone-variant" size={25} color="#000" />
                  </View>
                  <Text style={styles.titleLibralyContent}>Karaoke</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("SongFavorites", { content: "Podcast" })}
                style={styles.btnLibraly}>
                <View style={styles.iconLibralyContainer}>
                  <View style={styles.iconLibraly}>
                    <FontAwesome name="podcast" size={25} color="#000" />
                  </View>
                  <Text style={styles.titleLibralyContent}>Podcast</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnLibraly}>
                <View style={styles.iconLibralyContainer}>
                  <View style={styles.iconLibraly}>
                    <Ionicons name="ios-musical-notes-outline" size={25} color="#000" />
                  </View>
                  <Text style={styles.titleLibralyContent}>Bài hát</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View style={{
          paddingLeft: 15
        }}>
          <Text style={{
            fontSize: 16,
            fontWeight: "600",
            color: "#000"
          }}>Playlist</Text>
          <View style={{
            flexDirection: "row", alignItems: "center", marginTop: 10,
          }}>
            <TouchableOpacity style={{ backgroundColor: "orange", height: 55, width: 55, borderRadius: 5, justifyContent: "center", alignItems: "center" }}>
              <Text>Plus</Text>

            </TouchableOpacity>
            <Text style={{
              marginLeft: 10,
              fontSize: 13,
              fontWeight: "400",
              color: "#000"
            }}>Tạo Playlist mới</Text>
          </View>
        </View>


        <View style={styles.suggestPlaylistContainer}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#000"
            }}
          >Playlist gợi ý</Text>
          <Text
            style={{
              fontSize: 12,
              color: "#262626",
              fontWeight: "400"
            }}
          >Đang được nghe nhiều</Text>
          <TouchableOpacity style={styles.suggestPlaylistItem}>

            <Image style={{
              height: 35,
              width: 35,
              backgroundColor: "green",
              borderRadius: 5,
              marginRight: 15
            }} />
            <View>
              <Text>Đỉnh cao trending</Text>
              <Text style={{ fontSize: 10 }}>Zing MP3</Text>
            </View>


          </TouchableOpacity>

          <TouchableOpacity style={styles.suggestPlaylistItem}>

            <Image style={{
              height: 35,
              width: 35,
              backgroundColor: "green",
              borderRadius: 5,
              marginRight: 15
            }} />
            <View>
              <Text>Ballad Việt Nam</Text>
              <Text style={{ fontSize: 10 }}>Zing MP3</Text>
            </View>


          </TouchableOpacity>

          <TouchableOpacity style={styles.suggestPlaylistItem}>

            <Image style={{
              height: 35,
              width: 35,
              backgroundColor: "green",
              borderRadius: 5,
              marginRight: 15
            }} />
            <View>
              <Text>K-Pop Solo</Text>
              <Text style={{ fontSize: 10 }}>Zing MP3</Text>
            </View>


          </TouchableOpacity>

          <TouchableOpacity style={styles.suggestPlaylistItem}>

            <Image style={{
              height: 35,
              width: 35,
              backgroundColor: "green",
              borderRadius: 5,
              marginRight: 15
            }} />
            <View>
              <Text>Love Pop</Text>
              <Text style={{ fontSize: 10 }}>Zing MP3</Text>
            </View>


          </TouchableOpacity>
        </View>

      </ScrollView>

    </View>
  )
}

export default Favorites