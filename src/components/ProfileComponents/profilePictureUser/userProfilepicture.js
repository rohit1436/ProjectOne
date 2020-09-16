import React from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'
import ProfilePicture from '../../ProfilePicture/ProfilePictue'
import AnIcons from 'react-native-vector-icons/AntDesign'



const UserProfilepicture = ({imageUri}) => {
  return (
    <TouchableOpacity style={{width:100,height:80}}>
      <ProfilePicture uri={imageUri} colors={"#fff"}/>
      <AnIcons name="pluscircle" size={20} color='blue' style={{position:'absolute',bottom:0,right:10}}/>
    </TouchableOpacity>
  )
}

export default UserProfilepicture
