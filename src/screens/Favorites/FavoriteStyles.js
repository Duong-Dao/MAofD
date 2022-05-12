import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("screen")
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  headerContainer: {
    flex: 1,
    backgroundColor: "magenta",
    width: "100%",
  },
  headerTitle: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600"
  },
  favoriteListContainer: {
    flex: 5,
    backgroundColor: "yellow",
    width: "100%",
  },
  favoriteSong: {},
})


export default styles