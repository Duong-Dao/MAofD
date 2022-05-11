import React from "react"
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
// import { useNavigation } from '@react-navigation/native'
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./LoginStyles"


const Login = () => {

  // const navigation = useNavigation()
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
          <Text style={styles.txtSubmit}>Login</Text>
        </TouchableOpacity>
        <Text style={{ color: "#000" }}>New user?
          <Text
            style={{ fontWeight: "800", color: "#000" }}
            onPress={() => console.log("Create")}>  Create account</Text>
        </Text>
      </View>
      <View style={{ height: 50, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <View style={{ width: 120, height: 2, backgroundColor: "#fff" }}></View>
        <Text style={{ marginHorizontal: 30, fontSize: 16, fontWeight: "400", color: "#000" }}>Or</Text>
        <View style={{ width: 120, height: 2, backgroundColor: "#fff" }}></View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btnLoginGoogle}
          onPress={() => console.log("login")}
          activeOpacity={0.6}
        >
          <Ionicons name="logo-google" size={24} color="#fff" />
          <Text style={styles.txtLogin}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login