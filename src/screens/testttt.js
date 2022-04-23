



const {width, height} = Dimensions.get("screen")


const Setting = ()=>{
  return(
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Setting</Text>
      </View>
      <View style={styles.mainContainer}>

        <TouchableOpacity style={styles.itemSettingContainer}>
          <Ionicons name="ios-person-outline" size={25} color="black"/>
          <Text style={styles.itemSettingText}>Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemSettingContainer}>
          <MaterialCommunityIcons name="theme-light-dark" size={25} color="black"/>
          <Text style={styles.itemSettingText}>Theme</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemSettingContainer}>
          <Ionicons name="ios-language-outline" size={25} color="black"/>
          <Text style={styles.itemSettingText}>Language</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemSettingContainer}>
          <MaterialIcons name="support-agent" size={25} color="black"/>
          <Text style={styles.itemSettingText}>Feedback</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.itemSettingContainer,{borderBottomWidth:0}]}>
          <Ionicons name="ios-power-outline" size={25} color="red"/>
          <Text style={[styles.itemSettingText,{color:"red"}]}>Logout</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  headerContainer:{
    flex:1,
    backgroundColor:"green",
    width:"100%",
    alignItems:"left",
    justifyContent:"center",
    paddingLeft:30
  },
  headerTitle:{
    fontSize:45,
    fontWeight:800,
  },
  mainContainer:{
    flex:2,
    paddingTop:30,
    
  },
  itemSettingContainer:{
    borderBottomWidth:1,
    borderColor:"#ccc",
    marginVertical:15,
    width:width - 20 -20,
    height:45,
    paddingLeft:15,
    flexDirection:"row",
  },
  itemSettingText:{
    fontSize:16,
    fontWeight:400,
    fontStyle:"normal",
    marginLeft:10
  },
})
