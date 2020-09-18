import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const DefaultUserTagTab = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
          <MaIcon 
          name='clipboard-account-outline'
          size={50}
          color="#000"
          style={styles.iconStyle} 
          />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.nameOne}>Profile and Videos of You</Text>
        
        <Text style={styles.nameTwo}>
          When you share photos and videos, they"ll appear on your profile.
        </Text>
        
      </View>
    </View>
  )
}

export default DefaultUserTagTab
