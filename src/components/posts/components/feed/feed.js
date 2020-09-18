import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Stories from '../../../stories/stories';
import Post from '../../post';



const Feed = ({post,data}) => {
  return (
    <FlatList
      keyExtractor={(item, index) => item.likeCount.toString()}
      data={post}
      scrollEnabled
      renderItem={({item}) => <Post post={item} />}
      ListHeaderComponent={<Stories data={data}/>}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      decelerationRate='fast'
    />
  );
};

export default Feed;
