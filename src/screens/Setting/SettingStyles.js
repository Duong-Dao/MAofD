import { StyleSheet, Dimensions } from "react-native"
const { width, height } = Dimensions.get("screen")


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerContainer: {
    flex: 1,
    backgroundColor: "green",
    width: "100%",
    justifyContent: "center",
    paddingLeft: 30
  },
  headerTitle: {
    fontSize: 45,
    fontWeight: "800",
    color: "#000"
  },
  mainContainer: {
    flex: 2,
    paddingTop: 30,
  },
  itemSettingContainer: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginVertical: 15,
    width: width - 20 - 20,
    height: 45,
    paddingLeft: 15,
    flexDirection: "row",
  },
  itemSettingText: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 10,
    color: "#000"
  },
})

export default styles