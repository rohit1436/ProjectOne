import 'react-native-gesture-handler';
import React, {useReducer} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import AnIonicons from 'react-native-vector-icons/AntDesign';
import EnIonicons from 'react-native-vector-icons/Entypo';
import FaIonicons from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/Homescreen/HomeScreen';
import DiscoveryScreen from './src/screens/DiscoverScreen/DiscoveryScreen';
import PostScreen from './src/screens/PostScreen/PostScreen';
import NotificationScreen from './src/screens/NotificationScreen/NotificationScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import logo from './src/assets/images/logo.png';

const BottomTab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerLeft: () => (
            <TouchableOpacity>
              <FaIonicons name="camera" size={25} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons name="paper-plane-outline" size={25} />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {paddingLeft: 10},
          headerRightContainerStyle: {paddingRight: 10},
          headerTitle: () => (
            <TouchableOpacity>
              <Image
                source={logo}
                resizeMode="contain"
                style={{width: 135, height: 50}}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Instagram',
          headerLeft: () => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <AnIonicons name="plus" size={20} />
              <Text style={{fontWeight: '600', fontSize: 18, marginLeft: 2}}>
                anushkashettyofficial
              </Text>
              <AnIonicons name="down" size={15} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons name="menu-outline" size={25} />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {paddingLeft: 10},
          headerRightContainerStyle: {paddingRight: 10},
          headerTitle: () => false,
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <>
      <NavigationContainer>
        <BottomTab.Navigator
          labeled={false}
          activeColor={'#000'}
          inactiveColor={'rgba(0,0,0,0.5)'}
          barStyle={{backgroundColor: '#fff', height: 80}}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size = 25}) => {
              let iconName;
              // let color;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
                // color = focused ? 'white' : 'orange'

                return <EnIonicons name={iconName} size={size} color={color} />;
              }
              if (route.name === 'Discovery') {
                iconName = focused ? 'search' : 'search';
                // color = focused ? 'white' : 'orange'
                return <FaIonicons name={iconName} size={size} color={color} />;
              }
              if (route.name === 'Post') {
                iconName = focused ? 'plus-square' : 'plus-square';
                // color = focused ? 'white' : 'orange'
                return <FaIonicons name={iconName} size={size} color={color} />;
              }
              if (route.name === 'Potification') {
                iconName = focused ? 'heart' : 'hearto';
                // color = focused ? 'white' : 'orange'
                return <AnIonicons name={iconName} size={size} color={color} />;
              }
              if (route.name === 'Profile') {
                iconName = focused ? 'person-outline' : 'person-outline';
                // color = focused ? 'white' : 'orange'
                return focused ? (
                  <View
                    style={{
                      borderRadius: 16,
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 32,
                      height: 32,
                      borderColor: '#000',
                    }}>
                    <Ionicons name={iconName} size={20} color={color} />
                  </View>
                ) : (
                  <Ionicons name={iconName} size={size} color={color} />
                );
              }
            },
          })}>
          <BottomTab.Screen name="Home" component={HomeStackNavigator} />
          <BottomTab.Screen name="Discovery" component={DiscoveryScreen} />
          <BottomTab.Screen name="Post" component={PostScreen} />
          <BottomTab.Screen
            name="Potification"
            component={NotificationScreen}
          />
          <BottomTab.Screen name="Profile" component={ProfileStackNavigator} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
