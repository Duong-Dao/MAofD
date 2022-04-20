import {StyleSheet} from "react-native"


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    flex: 2,
    backgroundColor: 'red',
    width: '90%',
  },
  main: {
    flex: 5,
    backgroundColor: 'green',
    width: '90%',
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    backgroundColor: 'yellow',
    width: '90%',
  },
  btnItemSetting: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderBottomWidth: 1,
    marginVertical: 15,
    width: '100%',
    backgroundColor: '#fff',
  },
});
