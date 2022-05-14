import React, { useCallback } from 'react'
import { FlatList, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import styles from './FavoriteStyles'
import Ionicons from "react-native-vector-icons/Ionicons"


const libriesSource = [
  [{ id: "1", icon: "ios-musical-notes-outline", name: "Bài hát" }, { id: "5", icon: "ios-cloud-download-outline", name: "Trên thiết bị" }],
  [{ id: "2", icon: "ios-musical-notes-outline", name: "Podcast" }, { id: "6", icon: "ios-musical-notes-outline", name: "Karaoke" }],
  [{ id: "3", icon: "ios-musical-notes-outline", name: "Upload" }, { id: "7", icon: "ios-musical-notes-outline", name: "Album" }],
  [{ id: "4", icon: "ios-musical-notes-outline", name: "MV" }, { id: "8", icon: "ios-musical-notes-outline", name: "Nghệ sĩ" }],
]

const Favorites = () => {

  const ItemRender = (props) => {
    return (
      <TouchableOpacity style={styles.btnLibraly}>
        <View>
          <View>
            <Ionicons name={props.icon} size={35} color="#000" />
          </View>
          <Text>{props.name}</Text>
        </View>
      </TouchableOpacity>
    )

  }
  const handleRenderLibralies = useCallback(({ item }) => {
    return (
      <View style={{ paddingLeft: 20 }}>
        <ItemRender {...item[0]} />
        <ItemRender {...item[1]} />
      </View>
    )
  }, [])

  const keyExtractor = useCallback((item) => {
    return item.id
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Header</Text>
      </View>

      <ScrollView style={styles.favoriteListContainer}>
        <View style={{ marginTop: 20, marginBottom: 10 }}>
          <Text style={styles.titleContent}>Thư viện</Text>
          <View style={styles.musicLibries}>
            <FlatList
              data={libriesSource}
              keyExtractor={keyExtractor}
              horizontal={true}
              renderItem={handleRenderLibralies}
              showsHorizontalScrollIndicator={false} />
          </View>
        </View>
        <View style={{ marginTop: 20, marginBottom: 10 }}>
          <Text style={styles.titleContent}>Gần đây</Text>
          <View style={styles.musicLibries}>
            <FlatList
              data={libriesSource}
              keyExtractor={keyExtractor}
              horizontal={true}
              renderItem={handleRenderLibralies}
              showsHorizontalScrollIndicator={false} />
          </View>
        </View>

        <View style={{ marginTop: 20, marginBottom: 10 }}>
          <Text style={styles.titleContent}>Gợi ý</Text>
          <View style={styles.musicLibries}>
            <FlatList
              data={libriesSource}
              keyExtractor={keyExtractor}
              horizontal={true}
              renderItem={handleRenderLibralies}
              showsHorizontalScrollIndicator={false} />
          </View>
        </View>

      </ScrollView>

    </View>
  )
}

export default Favorites