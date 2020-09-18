import React from 'react';
import MaIonicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles'

const ProfileFooterTopTabNavigation = ({onPressOne,onPressTwo,count}) => {
  return (
  <View style={styles.mainContainer}>
  <TouchableOpacity style={styles.container} onPress={onPressOne}>
    <MaIonicons name='grid' color={count==0?'#000':'rgba(0,0,0,0.5)'}  size={25}/>
  </TouchableOpacity>
  <TouchableOpacity style={styles.container} onPress={onPressTwo}>
    <MaIonicons name='clipboard-account-outline' size={25} 
      color={count==1?'#000':'rgba(0,0,0,0.5)'}
    />
  </TouchableOpacity>
    </View>
  );
};

export default ProfileFooterTopTabNavigation;
