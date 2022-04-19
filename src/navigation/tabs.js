import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const Tabs = createBottomTabNavigator()


const tabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="" />
      <Tabs.Screen name="" />
      <Tabs.Screen name="" />
      <Tabs.Screen name="" />
    </Tabs.Navigator>
  )
}

export default tabs