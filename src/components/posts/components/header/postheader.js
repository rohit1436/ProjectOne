import React from 'react'
import { View, Text } from 'react-native'
import ProfilePicture from '../../../ProfilePicture/ProfilePictue';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles'
const PostHeader = ({imageUri,name}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.profileContainer}>
      <ProfilePicture uri={imageUri} colors={'#ae22e0'} size={40}/>
      <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.icon}>
      <Icon name="dots-vertical" size={30} color="#000" />
      </View>
    </View>
  )
}

export default PostHeader
