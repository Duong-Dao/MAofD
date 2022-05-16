import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  searchContainer: {
    height: 40,
    width: width - 30 - 30,
    marginTop: 10
  },
  inputSearch: {
    height: 40,
    width: "100%",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 999,
    paddingLeft: 15,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "500"
  },
  bannerContainer: {
    backgroundColor: "green",
    height: 200,
    marginBottom: 10,
    borderRadius: 25,
    padding: 10,
    width: width - 20 - 20,
    marginTop: 20,

    shadowColor: "#000",
    shadowOffset: { height: 5, width: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },
  recomendedContainer: {
    height: 250,
    marginBottom: 10,
    marginTop: 50,
    width: "100%"
  },
  playBottomContainer: {
    backgroundColor: "green",
    height: 55,
    borderRadius: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: width - 20 - 20
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
  },
  textHeader2: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 20,
    marginLeft: 30
  },
  wrapper: {},
  banner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 5,
  },
  bannerImg: {
    height: "100%",
    width: "100%",
    borderRadius: 15,
  }
})

export default styles
