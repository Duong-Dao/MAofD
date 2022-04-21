import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Main, Setting, MusicPlayer, Login } from "../screens"
import { NavigationContainer } from "@react-navigation/native"
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text } from "react-native"

const Tab = createBottomTabNavigator()

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Main} options={{
          headerShown: false
        }} />
        <Tab.Screen name="Favorite" component={Login} options={{
          headerShown: false
        }} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Tabs

// screenOptions={({ route }) => ({
//   tabBarIcon: ({ focused, color, size }) => {
//     let iconName;

//     if (route.name === 'Playlist') {
//       iconName = focused
//         ? 'ios-information-circle'
//         : 'ios-information-circle-outline';
//     } else if (route.name === 'Settings') {
//       iconName = focused ? 'ios-list-box' : 'ios-list';
//     }

//     // You can return any component that you like here!
//     return <Ionicons name={iconName} size={size} color={color} />;
//   },
//   tabBarActiveTintColor: 'tomato',
//   tabBarInactiveTintColor: 'gray',
// })}