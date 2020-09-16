import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  mainContainer:{
  justifyContent:'space-between',
  flexDirection:'row'
  },
  profileContainer:{
    justifyContent:'flex-start',
    flexDirection:'row'
  },
  name:{
    textAlign:'center',
    alignSelf:'center',
    fontWeight:'800',
    color:'#000'
  },
  icon:{
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:5
  }
})

export default styles