import React from 'react';
import {SafeAreaView, Text, View,StatusBar} from 'react-native';
import Feed from '../../components/posts/components/feed/feed';
import ProfilePicture from '../../components/ProfilePicture/ProfilePictue';

const HomeScreen = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Feed />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
