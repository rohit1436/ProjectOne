import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'


const ProfilePicture = ({uri,size=70,colors}) => {
  return (
    <View style={[styles.container,{width:size + 6,height : size + 6,borderColor:colors}]}>
      <Image source={{uri}} style={[styles.image,{width:size,height:size}]} />
    </View>
  )
}

export default ProfilePicture;