import {StyleSheet} from "react-native"



const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  textHeader:{
    position:"absolute",
    top:50,
    left:50,
    fontSize:24,
    fontWeight:"500"
  },
  favoritesContainer:{
    backgroundColor:"green",
    height:100,
    marginBottom:10,
    position:"absolute",
    borderRadius:25,
    left:30,
    top:100,
    right:30,
    padding:10
  },
  recomendedContainer:{
    height:200,
    marginBottom:10
  },
  playBottomContainer:{
    backgroundColor:"green",
    height:80,
    position:"absolute",
    bottom:10,
    left:10,
    right:10,
    borderRadius:200,
    padding:15
  },
  listContainer:{
    height:200, 
    width:200,
    borderRadius:25,
    backgroundColor:"red",
    marginHorizontal:15
  }
})

export default styles
