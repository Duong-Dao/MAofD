import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  containerHeader: {
    flex: 1,
    backgroundColor: "red",
    width: width,
    alignItems: "center",
    justifyContent: "center"

  },
  containerList: {
    flex: 5,
    backgroundColor: "magenta",
    width: width,
    alignItems: "center",
    paddingTop: 15,
  },
  btnItemListSong: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width - 20 - 20,
    height: 45,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    marginVertical: 10,
    paddingHorizontal: 15
  }
})

export default styles