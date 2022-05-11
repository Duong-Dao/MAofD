import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import Tabs from "./tabs"
import { Main, MusicPlayer, PlayList } from "../screens"

const Stack = createNativeStackNavigator()

const Stacks = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Tabs" component={Tabs} />
        {/* <Stack.Screen name="Main" component={Main} /> */}
        <Stack.Screen name="PlayList" component={PlayList} options={{
          headerShown: true
        }} />
        <Stack.Screen name="Player" component={MusicPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Stacks