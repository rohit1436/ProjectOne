const { Dimensions, StyleSheet } = require("react-native");



const {width,height} = Dimensions.get('window')

const styles = StyleSheet.create({
  mainContainer:{
    width,
    height: height / 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',

  },
  container:{
    width:width/2,
    justifyContent:'center',
    alignItems:'center',
    height:height/12,
    backgroundColor:'#fff'
  }
})

export default styles