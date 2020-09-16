import React from 'react'
import { View, Text } from 'react-native'
import ProfilePicture from '../ProfilePicture/ProfilePictue'
import styles from './styles'

export default function Story({imageUri,name}) {
  return (
    <View>
      <ProfilePicture uri={imageUri} colors={'#ae22e0'}/>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}
