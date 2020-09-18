import { Dimensions, StyleSheet } from 'react-native'


const {width,height} = Dimensions.get('window')



const styles = StyleSheet.create({
  mainContainer:{
    flexDirection:'row',
    flexWrap:'wrap'
  },
  innerContainer:{
    width:width/3,
    height:width/3
  },
  imageContainer:{
    width:width/3,
    height:width/3
  }
})


export default styles