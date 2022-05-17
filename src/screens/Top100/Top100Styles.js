import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("screen")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  recomendedContainer: {
    height: 250,
    marginBottom: 10,
    marginTop: 50,
    width: "100%"
  },
  listContainer: {
    height: 200,
    width: 200,
    borderRadius: 25,
    marginLeft: 15,
  },
  imgThumbnail: {
    borderRadius: 10,
    height: 200,
    width: 200,
    shadowColor: "#000",
    shadowOffset: { height: 3, width: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  textHeader2: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 20,
    marginLeft: 30
  },
})

export default styles
