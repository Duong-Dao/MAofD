import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './SongFavoritesStyles'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'



const errorImage = require("../../assets/error.png")

const SongFavoriteList = ({ route }) => {

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerContent}>{route.params.content}</Text>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="ios-chevron-back" size={35} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContainer}>
        <Image source={errorImage}
          resizeMode="cover"
          style={{
            height: 250,
            width: 250
          }}
        />
        <Text>Vui lòng đăng nhập để sử dụng chức năng</Text>
        <TouchableOpacity
          onPress={() => navigation.replace("Login")}
          style={styles.btnLogin}>
          <Text style={{ color: "#fff" }}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default SongFavoriteList



