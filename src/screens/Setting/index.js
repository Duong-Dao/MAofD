import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native

const titleCategorySetting = [
  'Account',
  'Notifiycations',
  'Theme',
  'Language',
  'Feedback',
]

const renderTitleSetting = ({ item }) => {
  return (
    <TouchableOpacity
      style={styles.btnItemSetting}
      onPress={() => console.log('name', item)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  )
}

const Setting = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Setting</Text>
      </View>
      <View style={styles.main}>
        <FlatList
          data={titleCategorySetting}
          keyExtractor={(i) => i.index}
          renderItem={renderTitleSetting}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.bottom}>
        <Text>Bottom</Text>
      </View>
    </View>
  )
}
export default Setting
