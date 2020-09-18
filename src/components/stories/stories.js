import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Story from '../story/story'

export default function Stories({data}) {
  

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


