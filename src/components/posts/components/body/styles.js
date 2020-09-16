import { Dimensions, StyleSheet } from 'react-native';


const {width,height} = Dimensions.get('window');


const styles = StyleSheet.create({
  imageView:{
    width:width,
    padding:5,
    height:height/3
  }
})

export default styles