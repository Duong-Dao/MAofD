import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("screen")
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  headerContainer: {
    backgroundColor: "magenta",
    width: "100%",
    height: 120
  },
  headerTitle: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600"
  },
  favoriteListContainer: {
    backgroundColor: "#fff",
    width: "100%",
  },
  favoriteSong: {},
  musicLibries: {

  },
  titleContent: {
    fontSize: 24,
    color: "#000",
    fontWeight: "800",
    marginLeft: 20,
    marginBottom: 15
  },
  btnLibraly: {
    backgroundColor: '#fff',
    width: 150,
    height: 85,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: 3,
    marginVertical: 5,
    borderRadius: 15,
    padding: 10,

    shadowColor: "#ccc",
    shadowOffset: {
      height: 10,
      width: 5
    },
    shadowOpacity: 0.5,
    elevation: 10,
    shadowRadius: 15,

    borderColor: "#ccc",
    borderWidth: 0.4
  }
})


export default styles