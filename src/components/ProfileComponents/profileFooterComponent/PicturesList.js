import React from 'react'
import { View, Text, Image ,TouchableOpacity} from 'react-native'
import DefaultUserPicTab from './DefaultUserPicTab'
import DefaultUserTagTab from './DefaultUserTagTab'

import styles from './PictureListStyle'

const PicturesList = ({data,count}) => {
  if(count === 0){
    return (
      <View style={styles.mainContainer}>
        {
          data.length === 0? <DefaultUserPicTab /> : data.map((item,index)=>(
          <TouchableOpacity key={index} style={[styles.innerContainer]}>
          <Image source={{uri:item.user.imageUri}} style={styles.imageContainer} resizeMode='cover' />
        </TouchableOpacity>
        ))
        }
      </View>
    )
  }
  if(count === 1){
    data=[]
    return (
      <View style={styles.mainContainer}>
        {
          data.length === 0?<DefaultUserTagTab/>:data.map((item,index)=>(
          <TouchableOpacity key={index} style={[styles.innerContainer]}>
          <Image source={{uri:item.user.imageUri}} style={styles.imageContainer} resizeMode='cover' />
        </TouchableOpacity>
        ))
        }
      </View>
    )
  }
}

export default PicturesList


