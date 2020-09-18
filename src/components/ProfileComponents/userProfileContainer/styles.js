import { Dimensions, StyleSheet } from 'react-native';

const {width,height} = Dimensions.get('window')

const styles = StyleSheet.create({
mainContainer:{
  justifyContent:'center',
  borderWidth:1,
  borderColor:'rgba(0,0,0,0.5)'
},
bottomContainer:{
padding:6,
justifyContent:'space-between'
},
name:{
 fontWeight:'600',
 fontSize:16
},
bio:{
fontSize:14,
width:width/2,
flexWrap:'wrap',
padding:4
},
links:{
  color:'#00376b',
  textDecorationLine:'underline',
  padding:4,
  fontWeight:'600'
},
lowerButton:{
  borderWidth:1,
  borderRadius:10,
  height:50,
  width:width-15,
  alignSelf:'center',
  justifyContent:'center',
  alignItems:'center',
  marginBottom:10
},
lowerButtonText:{
  fontWeight:'600'
}
})

export default styles