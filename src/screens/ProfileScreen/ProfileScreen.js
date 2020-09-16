import React from 'react'
import { View, Text, SafeAreaView, StatusBar, Dimensions } from 'react-native'
import UserProfileContainer from '../../components/ProfileComponents/userProfileContainer/UserProfileContainer'


const {width,height} = Dimensions.get('window')

const data = {
  user:{
    name:'Janka',
    imageUrl:'https://images.unsplash.com/photo-1512396988639-f876cb6f11ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=683&q=80'
  }
}


const ProfileScreen = () => {
  return (
   <>
   <StatusBar barStyle="dark-content"  />
     <SafeAreaView>
      <View>
        <UserProfileContainer imageUri={data.user.imageUrl} />
      </View>
     </SafeAreaView>
   </>
  )
}

export default ProfileScreen
