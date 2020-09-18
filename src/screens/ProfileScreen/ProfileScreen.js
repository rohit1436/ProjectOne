import React, { useState } from 'react';
import {View, Text, SafeAreaView, StatusBar, Dimensions, ScrollView} from 'react-native';
import UserProfileContainer from '../../components/ProfileComponents/userProfileContainer/UserProfileContainer';
import logo from '../../assets/images/Anushka.jpg'
import ProfileFooterTopTabNavigation from '../../components/ProfileComponents/profileFooterNavigationComponent/ProfileFooterTopTabNavigation';
import PicturesList from '../../components/ProfileComponents/profileFooterComponent/PicturesList';
const {width, height} = Dimensions.get('window');

const data = {
  user: {
    name: 'AnushkaShetty',
    imageUrl:'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/95344620_1336575656539199_4633466239967035392_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=lQWdxhSH8lwAX-gIfQj&oh=93a5261c425344331be4a8b30ca12afe&oe=5F89B54B',
    bio:'Official Anushka Shetty - Smile Always💞💞',
    link:'https://www.facebook.com/AnushkaShetty',
    textLink:'fb.com/AnushkaShetty'
  },
};

const listData = [
  {
    user: {
      name: 'Cristina',
      imageUri:
        'https://images.unsplash.com/photo-1584531910632-0c55032af6d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=655&q=80',
    },
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
  {
    user: {
      name: "jorge",
      imageUri:
        "https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
  },
  {
    user: {
      name: "Jonathan",
      imageUri:
        "https://images.unsplash.com/photo-1589884629108-3193400c7cc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
  },
  {
    user: {
      name: "Cayley",
      imageUri:
        "https://images.unsplash.com/photo-1539343915366-4da26f7a1f2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    user: {
      name: "Jason",
      imageUri:
        "https://images.unsplash.com/photo-1589925705918-8235ae849c46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    user: {
      name: "Omid",
      imageUri:
        "https://images.unsplash.com/photo-1558155001-7e7e8b709e2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    },
  },
  {
    user: {
      name: "Andres",
      imageUri:
        "https://images.unsplash.com/photo-1542499030-3a18b0faf1f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",
    },
  },
  {
    user: {
      name: "Jake",
      imageUri:
        "https://images.unsplash.com/photo-1598913557141-26471fb2d7c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    user: {
      name: "Martin",
      imageUri:
        "https://images.unsplash.com/photo-1599406682452-12614fce9f55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=697&q=80",
    },
  },
  {
    user: {
      name: "",
      imageUri:
        "https://images.unsplash.com/photo-1598621010298-5ac61a520ae9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
    },
  },
  {
    user: {
      name: "Matteo",
      imageUri:
        "https://images.unsplash.com/photo-1598895957524-344e809f20b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=630&q=80",
    },
  },
  {
    user: {
      name: "Mikhail",
      imageUri:
        "https://images.unsplash.com/photo-1597740748694-dee6152d8cd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    user: {
      name: "Nur",
      imageUri:
        "https://images.unsplash.com/photo-1600066417841-6f1118208094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
    },
  },
  {
    user: {
      name: "AJ Wallace",
      imageUri:
        "https://images.unsplash.com/photo-1571837401931-aff856bdee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=703&q=80",
    },
  },
  {
    user: {
      name: "Derick",
      imageUri:
        "https://images.unsplash.com/photo-1599709009025-bfb87e4b5014?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=629&q=80",
    },
  },
  {
    user: {
      name: "Gema",
      imageUri:
        "https://images.unsplash.com/photo-1600157488965-b1ffd2daccff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
    },
  },
  {
    user: {
      name: "Mehmet",
      imageUri:
        "https://images.unsplash.com/photo-1599884665627-c6c2a3131fc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
  },
  {
    user: {
      name: "Jeffery",
      imageUri:
        "https://images.unsplash.com/photo-1599698000828-2cf0562f2bf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
    },
  },
  {
    user: {
      name: "Anthony",
      imageUri:
        "https://images.unsplash.com/photo-1552298930-24a24595de10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    user: {
      name: "Jakob",
      imageUri:
        "https://images.unsplash.com/photo-1587944214730-0b9f98b4ccb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    user: {
      name: "Insta",
      imageUri:
        "https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=722&q=80",
    },
  },
  {
    user: {
      name: "Ashish",
      imageUri:
        "https://images.unsplash.com/photo-1597912625679-2755d88b9ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
    },
  },
  {
    user: {
      name: "Covid",
      imageUri:
        "https://images.unsplash.com/photo-1588956216174-bea38a067498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    },
  },
  {
    user: {
      name: "Flip",
      imageUri:
        "https://images.unsplash.com/photo-1595492866186-ca742c31094e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1008&q=80",
    },
  },
  {
    user: {
      name: "Joey",
      imageUri:
        "https://images.unsplash.com/photo-1515734392280-e60c25eb9f01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    },
  },
  {
    user: {
      name: "Judues",
      imageUri:
        "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    user: {
      name: "Groot",
      imageUri:
        "https://images.unsplash.com/photo-1559535332-db9971090158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    user: {
      name: "SuperDog",
      imageUri:
        "https://images.unsplash.com/photo-1532202802379-df93d543bac3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    user: {
      name: "kon",
      imageUri:
        "https://images.unsplash.com/photo-1542434684-41a0bf4e6cd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
  },
];



const ProfileScreen = () => {


  const [count,setCount] = useState(0);


 const onPressOne =()=>{
  if(count!==0){
    setCount(0)
  }
 }
 const onPressTwo = () =>{
  if(count!==1){
    setCount(1)
  }
 }


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView 
        stickyHeaderIndices={[1]}
        scrollEventThrottle={16}
        decelerationRate='fast'
        >
          <UserProfileContainer imageUri={data.user.imageUrl} name={data.user.name} 
            bio={data.user.bio}
            link={data.user.link}
            textLink={data.user.textLink}
            listData={listData}
          />
          <ProfileFooterTopTabNavigation onPressOne={()=>onPressOne()} onPressTwo={()=>onPressTwo()}
          count={count}
          />
          <PicturesList data={listData} count={count} />

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ProfileScreen;
