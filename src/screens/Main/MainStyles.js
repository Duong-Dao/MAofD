import { StyleSheet } from "react-native"



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
    //backgroundColor: "green",
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
    //backgroundColor: "red",
    marginLeft: 30,
    //padding: 15
    shadowColor: "#000",
    shadowOffset: { height: 5, width: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10

  },
  textHeader2: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 20,
    marginLeft: 30
  },
})

export default styles
