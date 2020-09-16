import React from 'react';
import {View, Text} from 'react-native';
import PostBody from './components/body/postbody';
import PostFooter from './components/footer/postfooter';
import PostHeader from './components/header/postheader';

const Post = ({post}) => {
  return (
    <View>
      <PostHeader imageUri={post.user.imageUri} name={post.user.name} />
      <PostBody imageUri={post.imageUri} />
      <PostFooter 
      postedAt={post.postedAt}
      caption={post.caption}
      likeCount={post.likeCount}
      />
    </View>
  );
};

export default Post;
