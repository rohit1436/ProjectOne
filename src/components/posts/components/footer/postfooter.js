import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles';
import ADIcon from 'react-native-vector-icons/AntDesign'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import IOIcon from 'react-native-vector-icons/Ionicons'

const PostFooter = ({likeCount : likeCountProp,postedAt,caption}) => {

  const [like,setLike] = useState(false)
  const [likeCount,setLikeCount] = useState(0)
  const [save,setSave] = useState(true)

  

  const onLikePressed =()=>{
    const amount = like ? -1 : 1;
    setLikeCount(likeCount + amount)
    setLike(!like)
    //TODO : server Rendering
  }

useEffect(()=>{
    setLikeCount(likeCountProp)
  },[])

  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconsContainer}>
        <View style={styles.iconLeftContainerInner}>
          <TouchableOpacity onPress={() => onLikePressed()}>
          <ADIcon name={like?'heart' : 'hearto'} size={25} color={like?'rgba(255,0,0,0.8)': null} style={styles.icons}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Comment')}>
          <FAIcon name='comment-o' size={25} style={[styles.icons,{transform:[{rotateY:"180deg"}]}]}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Share')}>
          <IOIcon name='paper-plane-outline'  size={25} style={styles.icons}/>
          </TouchableOpacity>
        </View>
        <View style={styles.iconRightContainerInner}>
          <TouchableOpacity onPress={() => console.log('Save')}>
          <FAIcon name={save ? 'bookmark-o' : 'bookmark'} size={25} style={styles.icons}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.likeCount}>{likeCount + " Likes"}</Text> 
        <Text style={styles.caption}>{caption}</Text> 
        <Text style={styles.postedAt}>{postedAt}</Text> 
      </View>
    </View>
  )
}

export default PostFooter
