import { StyleSheet, Dimensions } from "react-native"


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    backgroundColor: "orange",
  },
  headerContent: {
    position: "absolute",
    top: 20,
    left: "40%",
    fontSize: 16,
    fontWeight: "500",
    color: "#fff"
  },
  btnBack: {
    position: "absolute",
    height: 35,
    width: 35,
    top: 10,
    left: 10
  },
  mainContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "90%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  btnLogin: {
    backgroundColor: "red",
    height: 35,
    width: 100,
    borderRadius: 15,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  }

})

export default styles