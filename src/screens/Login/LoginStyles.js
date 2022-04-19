import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00FF99",
    width: "100%",
    height: "100%"
  },
  image: {
    height: 250,
    width: 250,
    borderRadius: 25
  },
  appName: {
    color: "#000",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 40
  },
  formContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  inputAccount: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
    borderRadius: 15,
    backgroundColor: "#fff",
    height: 44,
    width: 300,
    marginVertical: 5,
    paddingLeft: 15
  },
  btnSubmit: {
    backgroundColor: "red",
    height: 50,
    width: 250,
    borderRadius: 25,
    justifyContent:"center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30
  }
})

export default styles