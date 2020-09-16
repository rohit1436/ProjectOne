import React from 'react'
import { View, Text, Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Userdetails from '../Userdetails/Userdetails'
import styles from './styles'

const UserProfileContainer = ({imageUri}) => {
  return (
    <View style={styles.mainContainer}>
      <Userdetails imageUri={imageUri} />
      <View style={styles.bottomContainer}>
      <Text style={styles.name}>UserName</Text>
        <Text style={styles.bio}>
        we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble 
        </Text>
        <Text onPress={() => Linking.openURL('https:google.com')} style={styles.links} >https://google.com</Text>
      </View>
        <TouchableOpacity style={styles.lowerButton}>
          <Text style={styles.lowerButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default UserProfileContainer
