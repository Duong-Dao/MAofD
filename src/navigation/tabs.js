import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from "react"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Main, Setting, Favorites, SongFavoriteList } from "../screens"
import MainStacks from './stacksMain'
import { createNativeStackNavigator } from '@react-navigation/native-stack'



const Tab = createBottomTabNavigator()
const FavoriteStack = createNativeStackNavigator()

const FavoriteStacks = () => {
  return (
    <FavoriteStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <FavoriteStack.Screen name='Favorite' component={Favorites} />
      <FavoriteStack.Screen name='SongFavorites' component={SongFavoriteList} />
    </FavoriteStack.Navigator>
  )
}

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'orange',
      tabBarInactiveTintColor: 'black',
      tabBarLabelStyle: { fontSize: 10, lineHeight: 15 },
      tabBarStyle: { height: 50 }
    }}>
      <Tab.Screen name="HomeMain" component={MainStacks} options={{
        headerShown: false,
        tabBarIcon: ({ color, size, focus }) => (
          <Ionicons name="home-outline" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="FavoriteStacks" component={FavoriteStacks} options={{
        headerShown: false,
        tabBarIcon: ({ color, focus, size }) => (
          <Ionicons name="heart-outline" size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Setting" component={Setting} options={{
        headerShown: false,
        tabBarIcon: ({ color, focus, size }) => (
          <Ionicons name="settings-outline" size={size} color={color} />
        )
      }} />
    </Tab.Navigator>
  )
}

export default Tabs

