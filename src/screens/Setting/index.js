import React from 'react'
import { Text, View, TouchableOpacity } from "react-native"
import styles from "./SettingStyles"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'


const Setting = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Setting</Text>
      </View>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.itemSettingContainer}>
          {/* <Ionicons name="ios-person-outline" size={25} color="black" /> */}
          <Text style={styles.itemSettingText}>Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemSettingContainer}>
          {/* <MaterialCommunityIcons name="theme-light-dark" size={25} color="black" /> */}
          <Text style={styles.itemSettingText}>Theme</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemSettingContainer}>
          {/* <Ionicons name="ios-language-outline" size={25} color="black" /> */}
          <Text style={styles.itemSettingText}>Language</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemSettingContainer}>
          {/* <MaterialIcons name="support-agent" size={25} color="black" /> */}
          <Text style={styles.itemSettingText}>Feedback</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.itemSettingContainer, { borderBottomWidth: 0 }]}>
          {/* <Ionicons name="ios-power-outline" size={25} color="red" /> */}
          <Text style={[styles.itemSettingText, { color: "red" }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Setting
