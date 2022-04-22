import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from './MainStyles';
import { useNavigation } from "@react-navigation/native"

const Main = () => {

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>PlayList</Text>
      <View style={styles.favoritesContainer}>
        <Text>Favorites</Text>
      </View>
      <View style={styles.recomendedContainer}>
        <Text style={styles.textHeader2}>Recomended</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          <View style={styles.listContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Player")}>
              <Text>Go to Player</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.listContainer}>

          </View>
          <View style={styles.listContainer}>

          </View>
          <View style={styles.listContainer}>

          </View>
          <View style={styles.listContainer}>

          </View>
          <View style={styles.listContainer}>

          </View>
          <View style={styles.listContainer}>

          </View>
          <View style={styles.listContainer}>

          </View>
          <View style={styles.listContainer}>

          </View>

        </ScrollView>
      </View>
      <View style={styles.playBottomContainer}>
        <Ionicons name="play-skip-back-circle-outline" size={35} color="black" />
        <Ionicons name="play-circle-outline" size={50} color="black" />
        <Ionicons name="play-skip-forward-circle-outline" size={35} color="black" />
      </View>
    </View>
  );
};

export default Main
