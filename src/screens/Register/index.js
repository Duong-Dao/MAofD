import React, { useState } from "react"
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native"
import { useNavigation } from '@react-navigation/native'
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./RegisterStyles"


const Register = () => {

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
  const register = () => {
    // if (username === "admin" && password === "admin") {
    //   navigation.replace("HomeMusic")
    // }
    // else {
    showAlert()
    // }
  }

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()

  const handleChangeUsername = (value) => {
    setUsername(value)
  }

  const handleChangePassword = (value) => {
    setPassword(value)
  }

  const handleConfirmPassword = (value) => {
    setConfirmPassword(value)
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

        <TextInput
          style={styles.inputAccount}
          placeholder="Nhập lại mật khẩu"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(value) => handleConfirmPassword(value)}
        />


        <TouchableOpacity style={styles.btnSubmit}
          onPress={() => register()}>
          <Text style={styles.txtSubmit}>Đăng kí</Text>
        </TouchableOpacity>
        <Text style={{ color: "#000" }}>Đã có tài khoản?
          <Text
            style={{ fontWeight: "800", color: "#000" }}
            onPress={() => navigation.navigate("Login")}>  Đăng nhập</Text>
        </Text>
      </View>
    </View>
  )
}

export default Register