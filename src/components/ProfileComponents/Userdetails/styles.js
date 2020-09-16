import { Dimensions, StyleSheet } from 'react-native';




const {width,height} = Dimensions.get('window');


const styles=StyleSheet.create({
mainContainer:{
justifyContent:'space-between',
flexDirection:'row',
alignItems:'center',

},
profileContainer:{
  width:width/3,
},
innerContainers:{
paddingLeft:25
},
rightContainer:{
  justifyContent:'center',
flexDirection:'row',
marginRight:width/6
}
,
upperNames:{
textAlign:'center',
fontWeight:'800'
},
lowerNames:{
  textAlign:'center'
}
})

export default styles