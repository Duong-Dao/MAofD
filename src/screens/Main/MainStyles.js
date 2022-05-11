import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  searchContainer: {
    height: 40,
    width: width - 30 - 30,
    position: "absolute",
    top: 10,
  },
  inputSearch: {
    height: 40,
    width: "100%",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 999,
    paddingLeft: 15,
    lineHeight: 40
  },
  textHeader: {
    position: "absolute",
    top: 50,
    left: 30,
    fontSize: 24,
    fontWeight: "500"
  },
  favoritesContainer: {
    backgroundColor: "green",
    height: 100,
    marginBottom: 10,
    position: "absolute",
    borderRadius: 25,
    left: 30,
    top: 100,
    right: 30,
    padding: 10
  },
  recomendedContainer: {
    height: 250,
    marginBottom: 10,
    marginTop: 50,
    width: "100%"
  },
  playBottomContainer: {
    backgroundColor: "green",
    height: 80,
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    borderRadius: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  listContainer: {
    height: 200,
    width: 200,
    borderRadius: 25,
    marginLeft: 30,

  },
  imgThumbnail: {
    borderRadius: 10,
    height: 200,
    width: 200,
    shadowColor: "#000",
    shadowOffset: { height: 5, width: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    // elevation: 10
  },
  textHeader2: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 20,
    marginLeft: 30
  },
})

export default styles
