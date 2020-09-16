import React from 'react'
import { View, Text } from 'react-native'
import UserProfilepicture from '../profilePictureUser/userProfilepicture'
import styles from './styles'
const Userdetails = ({imageUri}) => {
  return (
    <View style={styles.mainContainer}>

      <View style={styles.profileContainer}>
      <UserProfilepicture imageUri={imageUri} />
      </View>

      <View style={styles.rightContainer}>

      <View style={styles.innerContainers}>
        <Text style={styles.upperNames}>22</Text>
        <Text style={styles.lowerNames}>Posts</Text>
      </View >

      <View style={styles.innerContainers}>
      <Text style={styles.upperNames}>150</Text>
        <Text style={styles.lowerNames}>Followers</Text>
      </View>

      <View style={styles.innerContainers}>
      <Text style={styles.upperNames}>280</Text>
        <Text style={styles.lowerNames}>Following</Text>
      </View>

      </View>

    </View>
  )
}

export default Userdetails
