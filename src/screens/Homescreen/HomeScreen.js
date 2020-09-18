import React from 'react';
import {SafeAreaView, Text, View,StatusBar} from 'react-native';
import Feed from '../../components/posts/components/feed/feed';
import ProfilePicture from '../../components/ProfilePicture/ProfilePictue';

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

const data = [
  {
    uri:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    name: 'nora',
  },
  {
    uri:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    name: 'sam',
  },
  {
    uri:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    name: 'alex',
  },
  {
    uri:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
    name: 'jena',
  },
  {
    uri:'https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    name: 'dani',
  },
  {
    uri:'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    name: 'ali',
  },
  {
    uri:'https://images.unsplash.com/photo-1523307730650-594bc63f9d67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80',
    name: 'dev',
  },
  {
    uri:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    name: 'andreia',
  },
];


const HomeScreen = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Feed post={post} data={data}/>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
