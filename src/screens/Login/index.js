import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./LoginStyles"
import { useNavigation } from '@react-navigation/native'


const Login = () => {

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../assets/iconMain.jpg")} style={styles.image} />
        <Text style={styles.appName}>MAofD</Text>
      </View>
      <View>
      </View>
      <View style={styles.formContainer}>
        <Text>Form and Submit</Text>
        <TextInput
          style={styles.inputAccount}
          placeholder="username"
        />
        <TextInput
          style={styles.inputAccount}
          placeholder="password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.btnSubmit} >
          <Text>Submit</Text>
        </TouchableOpacity>
        <Text>New user? <Text style={{ fontWeight: "800" }} onPress={() => console.log("Create")}>Create account</Text></Text>
      </View>
      <View style={{ height: 50, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <View style={{ width: 100, height: 1, backgroundColor: "#fff" }}></View>
        <Text style={{ marginHorizontal: 50 }}>Or</Text>
        <View style={{ width: 100, height: 1, backgroundColor: "#fff" }}></View>
      </View>
      <View>
        <Text>Bottom</Text>
      </View>
    </View>
  )
}

export default Login