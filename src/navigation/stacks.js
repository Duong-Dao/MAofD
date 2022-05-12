import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { Login, MusicPlayer, PlayList } from "../screens"
import Tabs from "./tabs"

const Stack = createNativeStackNavigator()

const Stacks = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="PlayList" component={PlayList} 
        options={{
          headerShown: true
        }} />
        <Stack.Screen name="Player" component={MusicPlayer} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Stacks