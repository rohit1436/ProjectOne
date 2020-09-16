import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import styles from './styles'
const PostBody = ({imageUri}) => {
  return (
    <Image source={{uri:imageUri}} style={styles.imageView} />
  )
}

export default PostBody


