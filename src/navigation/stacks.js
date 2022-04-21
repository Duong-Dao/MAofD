import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"


const Stacks = createNativeStackNavigator()

const stacks = () => {
  return (
    <NavigationContainer>
      <Stacks.Navigator>
        <Stacks.Screen name="" />
        <Stacks.Screen name="" />
      </Stacks.Navigator>
    </NavigationContainer>
  )
}

export default stacks