import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';

const data = ['hehe', 'hoho', 'keke', 'khua khua', 'khakha', 'kaka'];
const renderList = ({ item }) => {
  return (
    <View style={styles.listContainer}>
      <Text>item</Text>
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
        <FlatList
          data={data}
          keyExtractor={(i) => i.index}
          renderItem={renderList}
          horizontal
          showsHorizontalScrollIndicator="false"
        />
      </View>
      <View style={styles.playBottomContainer}>
        <Text>Bottom</Text>
      </View>
    </View>
  );
};

export default PlayList;
