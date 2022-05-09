import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9966FF",
  },
  containerHeader: {
    flex: 1,
    width: width,
    alignItems: "center",
    justifyContent: "center"
  },
  txtHeader: {
    fontSize: 28,
    fontWeight: "600",
    fontStyle: "normal",
    color: "#fff",
    letterSpacing: 2,
    lineHeight: 30,
  },
  containerList: {
    flex: 5,
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
    // paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    paddingLeft: 15,
    // paddingRight: 15
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