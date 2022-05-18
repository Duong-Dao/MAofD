import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  headerContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.5
  },
  txtHeader: {
    fontSize: 28,
    fontWeight: "600",
    fontStyle: "normal",
    color: "#000",
  },
  containerList: {
    flex: 8,
    width: width,
    alignItems: "center",
    paddingTop: 15,
  },
  btnItemListSong: {
    flexDirection: "row",
    width: width - 25 - 25,
    height: 85,
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    paddingLeft: 15,
    borderColor: "#ccc",
    borderWidth: 1,


    shadowOffset: { height: 3, width: 5 },
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  songTitle: {
    marginLeft: 20,
    color: "#000",
    fontSize: 18,
    paddingRight: 85
  },
  songArtwork: {
    borderRadius: 10,
    height: 65,
    width: 65
  }
})


export default styles