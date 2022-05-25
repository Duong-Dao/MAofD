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
  favoriteSong: {

  },
  musicLibries: {
    marginLeft: 10,
    marginRight: 10
  },
  titleContent: {
    fontSize: 24,
    color: "#000",
    fontWeight: "600",
    marginLeft: 20,
    marginBottom: 15
  },
  btnLibraly: {
    backgroundColor: '#fff',
    width: 130,
    height: 65,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    paddingLeft: 10,

    shadowColor: "#ccc",
    shadowOffset: { height: 10, width: 5 },
    shadowOpacity: 0.5,
    elevation: 10,
    shadowRadius: 15,

    borderColor: "#ccc",
    borderWidth: 0.4
  },
  iconLibralyContainer: {
    // padding: 10,

  },
  iconLibraly: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    height: 30,
    width: 30,
    marginBottom: 5
  },
  titleLibralyContent: {
    fontSize: 12,
    fontWeight: "400",
    color: "#262626"
  },
  suggestPlaylistContainer: {
    marginTop: 20,
    justifyContent: "center",
    paddingLeft: 15,
    marginBottom: 10
  },
  suggestPlaylistItem: {
    width: width - 20 - 20,
    height: 55,
    marginLeft: 5,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 10
  }
})


export default styles