import { Dimensions, StyleSheet } from 'react-native'

const {width,height} = Dimensions.get('window')


const styles = StyleSheet.create({
  mainContainer:{
    justifyContent:'center',
    alignItems:'center',
    height:height/2,
    width
  },
  iconContainer:{
    justifyContent:'center',
    alignItems:'center',
    borderWidth:3,
    borderRadius:50,
    padding:20
  },
  iconStyle:{
    borderWidth:5,
    borderRadius:10,
    alignSelf:'center'
  },
  detailsContainer:{
    padding:10
  },
  nameOne:{
    fontSize:22,
    fontWeight:'600',
    textAlign:'center',
    marginBottom:5
  },
  nameTwo:{
    fontSize:18,
    width:width * 3/4,
    textAlign:"center",
    marginBottom:5
  },
  nameThree:{
    color:'#00376b',
    textAlign:'center',
    fontWeight:'600'
  }
})



export default styles 