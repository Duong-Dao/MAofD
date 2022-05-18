import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from "react"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Main, Setting, Favorites } from "../screens"
import MainStacks from './stacksMain'


const Tab = createBottomTabNavigator()

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
      <Tab.Screen name="Favorite" component={Favorites} options={{
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

