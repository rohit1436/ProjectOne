import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Story from '../story/story'

export default function Stories() {
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

  return (
    <>
    <FlatList 
      keyExtractor={item => item.name}
      data={data}
      renderItem={({item}) => <Story imageUri={item.uri} name={item.name} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      pagingEnabled
      contentContainerStyle={{marginBottom:15}}
      scrollEventThrottle={16}
    />
    </>
  );
}


