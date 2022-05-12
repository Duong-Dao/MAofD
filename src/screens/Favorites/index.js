import { View, Text, SectionList } from 'react-native'
import React from 'react'
import styles from './FavoriteStyles'

const Favorites = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Header</Text>

      </View>

      <View style={styles.favoriteListContainer}>
        <Text>List</Text>
      </View>

    </View>
  )
}

export default Favorites