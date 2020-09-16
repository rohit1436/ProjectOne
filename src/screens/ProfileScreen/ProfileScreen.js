import React from 'react'
import { View, Text, SafeAreaView, StatusBar, Dimensions } from 'react-native'

const {width,height} = Dimensions.get('window')

const ProfileScreen = () => {
  return (
   <>
   <StatusBar barStyle="dark-content"  />
     <SafeAreaView>
      <View style={{backgroundColor:'#432353',display:'flex',justifyContent:'center',alignItems:'center',width,height}}>
      <Text style={{fontSize:20,fontWeight:'800',textAlign:'center'}}>Profile</Text>
      </View>
     </SafeAreaView>
   </>
  )
}

export default ProfileScreen
