import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import FaIcon from 'react-native-vector-icons/Fontisto'

const DefaultUserPicTab = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
          <FaIcon 
          name='plus-a'
          size={50}
          color="#000"
          style={styles.iconStyle} 
          />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.nameOne}>Profile</Text>
        <Text style={styles.nameTwo}>
          When you share photos and videos, they"ll appear on your profile.
        </Text>
        <Text style={styles.nameThree}>
          Share your first photo or video
        </Text>
      </View>
    </View>
  )
}

export default DefaultUserPicTab
