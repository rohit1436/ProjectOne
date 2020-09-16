import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Stories from '../../../stories/stories';
import Post from '../../post';

const post = [
  {
    user: {
      name: 'Cristina',
      imageUri:
        'https://images.unsplash.com/photo-1584531910632-0c55032af6d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=655&q=80',
    },
    imageUri:
      'https://images.unsplash.com/photo-1586246698829-4258572d1e76?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    postedAt: '6 minutes ago',
    caption: 'Beautiful click by Omid Armin',
    likeCount: 12345,
  },
  {
    user: {
      name: 'Kimson',
      imageUri:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    },
    imageUri:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    postedAt: '6 minutes ago',
    caption: 'Beautiful click by Oyo',
    likeCount: 123454,
  },
  {
    user: {
      name: 'Alexender',
      imageUri:
        'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    },
    imageUri:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    postedAt: '6 minutes ago',
    caption: 'Beautiful click by Kimson Doen',
    likeCount: 125645,
  },
  {
    user: {
      name: 'Black',
      imageUri:
        'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
    },
    imageUri:
      'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
    postedAt: '6 minutes ago',
    caption: 'Beautiful click by Blake Armin',
    likeCount: 158448,
  },
  {
    user: {
      name: 'Cristina',
      imageUri:
        'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    },
    imageUri:
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    postedAt: '6 minutes ago',
    caption: 'Beautiful click by Alax Armin',
    likeCount: 15448,
  },
];

const Feed = () => {
  return (
    <FlatList
      keyExtractor={(item, index) => item.likeCount.toString()}
      data={post}
      scrollEnabled
      renderItem={({item}) => <Post post={item} />}
      ListHeaderComponent={Stories}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      decelerationRate='fast'
    />
  );
};

export default Feed;
