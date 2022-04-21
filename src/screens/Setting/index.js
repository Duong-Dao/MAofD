import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View, FlatList, TouchableOpacity } from "react-native"
import styles from "./SettingStyles"




const Setting = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Setting</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.btnItemSetting}
          onPress={() => console.log('Account')}>
          <Text>Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnItemSetting}
          onPress={() => console.log('Theme')}>
          <Text>Theme</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnItemSetting}
          onPress={() => console.log('Language')}>
          <Text>Language</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnItemSetting}
          onPress={() => console.log('Feedback')}>
          <Text>Feedback</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.bottom}>
        <Text>Bottom</Text>
      </View>
    </View>
  )
}
export default Setting
