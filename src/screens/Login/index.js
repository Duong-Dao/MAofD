import React, { useState } from "react"
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native"
import { useNavigation } from '@react-navigation/native'
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./LoginStyles"


const Login = () => {

  const navigation = useNavigation()

  const showAlert = () => {
    Alert.alert(
      "Đăng nhập thất bại",
      "Thông tin tài khoản hoặc mật khẩu không chính xác. Vui lòng nhập lại.",
      [
        {
          text: "Ok",
          //onPress: () => Alert.alert("Cancel Pressed"),
          style: "Ok",
        },
        // {
        //   text: "Cancel",
        //   //onPress: () => Alert.alert("Cancel Pressed"),
        //   style: "cancel",
        // },
      ]
    )
  }
  const login = () => {
    if (username === "admin" && password === "admin") {
      navigation.replace("HomeMusic")
    }
    else {
      showAlert()
    }
  }

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()


  const handleChangeUsername = (value) => {
    setUsername(value)
  }

  const handleChangePassword = (value) => {
    setPassword(value)
  }


  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../assets/iconMain.jpg")} style={styles.image} />
        <Text style={styles.appName}>MAofD</Text>
      </View>
      <View>
      </View>
      <View style={styles.formContainer}>
        {/* <Text>Form and Submit</Text> */}
        <TextInput
          style={styles.inputAccount}
          placeholder="Tên đăng nhập"
          value={username}
          onChangeText={(value) => handleChangeUsername(value)}
        />
        <TextInput
          style={styles.inputAccount}
          placeholder="Mật khẩu"
          secureTextEntry
          value={password}
          onChangeText={(value) => handleChangePassword(value)}
        />
        <TouchableOpacity style={styles.btnSubmit}
          onPress={() => login()}>
          <Text style={styles.txtSubmit}>Login</Text>
        </TouchableOpacity>
        <Text style={{ color: "#000" }}>Chưa có tài khoản?
          <Text
            style={{ fontWeight: "800", color: "#000" }}
            onPress={() => navigation.navigate("Register")}>  Tạo tài khoản</Text>
        </Text>
      </View>
      <View style={{ height: 50, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <View style={{ width: 120, height: 2, backgroundColor: "#fff" }}></View>
        <Text style={{ marginHorizontal: 30, fontSize: 16, fontWeight: "400", color: "#fff" }}>Hoặc</Text>
        <View style={{ width: 120, height: 2, backgroundColor: "#fff" }}></View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btnLoginGoogle}
          onPress={() => login()}
          activeOpacity={0.6}
        >
          <Ionicons name="logo-google" size={24} color="#fff" />
          <Text style={styles.txtLogin}>Đăng nhập bằng Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login