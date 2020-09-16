import { Dimensions, StyleSheet } from 'react-native'


const {width,height} = Dimensions.get('window')



const styles = StyleSheet.create({
  mainContainer:{
    padding:6
  },
  iconsContainer:{
    justifyContent:'space-between',
    flexDirection:'row'
  },
  iconLeftContainerInner:{
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
  },
  iconRightContainerInner:{
    justifyContent:'space-between',
    alignItems:'center'
  },
  likeCount:{
    marginTop:2,
    fontWeight:'600'
  },
  caption:{
    marginBottom:2,
    fontWeight:'500'
  },
  postedAt:{
    color:'rgba(0,0,0,0.5)'
  },
  textContainer:{

  },
  icons:{
    padding:5
  }

})

export default styles