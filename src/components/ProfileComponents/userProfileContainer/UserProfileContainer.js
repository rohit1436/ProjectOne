import React from 'react'
import { View, Text, Linking, ScrollView, FlatList ,TouchableOpacity } from 'react-native'
import Userdetails from '../Userdetails/Userdetails'
import styles from './styles'


const UpperProfileContainer = ({imageUri,name,bio,link,textLink}) => {
 
  return(
    <View style={styles.mainContainer}>
    <Userdetails imageUri={imageUri} />
    <View style={styles.bottomContainer}>
    <Text style={styles.name}>{name}</Text>
      <Text style={styles.bio}>
     {bio}
      </Text>
      <Text onPress={() => Linking.openURL(link)} style={styles.links}>{textLink}</Text>
    </View>
      <TouchableOpacity style={styles.lowerButton}>
        <Text style={styles.lowerButtonText}>Edit Profile</Text>
      </TouchableOpacity>
  </View>
  )
}



const UserProfileContainer = ({imageUri,name,bio,link,textLink,listData}) => {
  return (
<>
    <UpperProfileContainer imageUri={imageUri} 
      name={name}
      bio={bio}
      link={link}
      textLink={textLink}
    />

</>
)
}

export default UserProfileContainer

{/* <ProfileFooterTopTabNavigation listData={listData} /> */}