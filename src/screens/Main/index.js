import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './MainStyles';
import Ionicons from 'react-native-vector-icon/Ionicons';

const data = ['hehe', 'hoho', 'keke', 'khua khua', 'khakha', 'kaka'];
const renderList = ({ item }) => {
  return (
    <View style={styles.listContainer}>
      <Text>{item}</Text>
    </View>
  );
};
const PlayList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>PlayList</Text>
      <View style={styles.favoritesContainer}>
        <Text>Favorites</Text>
      </View>
      <View style={styles.recomendedContainer}>
      <Text style={styles.textHeader2}>Recomended</Text>
        <FlatList
          data={data}
          keyExtractor={(i) => i.index}
          renderItem={renderList}
          horizontal
          showsHorizontalScrollIndicator="false"
        />
      </View>
      <View style={styles.playBottomContainer}>
      <Ionicons name="play-skip-back-circle-outline" size={35} color="black" />
        <Ionicons name="play-circle-outline" size={50} color="black" />
        <Ionicons name="play-skip-forward-circle-outline" size={35} color="black" />
      </View>
    </View>
  );
};

export default PlayList;
