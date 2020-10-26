import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Icon, Card, Text ,Button } from 'react-native-elements'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import axios  from 'axios'

const Stack = createStackNavigator();

//components import
import NewsDetails from '../screens/news_details'


export default function Sport() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        options={{
          title: 'Sport News',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      name="Sports News" component={News} />
      <Stack.Screen 
        options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: '#fff'
        }}
      name="Details" component={NewsDetails} />
    </Stack.Navigator>
  );
}


//news
function News({navigation, route}) {
  const [allNews, setAllNews] = useState([])

  useEffect(()=>{

    axios.get('https://newsapi.org/v2/top-headlines?country=ph&category=sports&apiKey=2ac99f3d1e86434e8ab50bcecf66b135')
    .then(function (response) {
      setAllNews(response.data.articles)
      // console.log(allNews)
      // console.log("enddd")
    })
    .catch(function (error) {
      console.log(error);
    })
  
  },[0])

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>
      {
        allNews.map((data,index)=>{
          if(data.urlToImage){
            return <Card containerStyle={{padding: 0, borderRadius: 10}} key={index}>
            <TouchableOpacity onPress={()=>{  navigation.navigate("Details", data) }} activeOpacity={0.6}>
              <Image
                style={{width: 'auto', height: 200, borderTopLeftRadius: 10, borderTopRightRadius: 10}}
                resizeMode="cover"
                source={{ uri: data.urlToImage }}
              />
              
              <Text style={{fontSize: 18, padding: 10, color: '#4d4d4d'}}>{data.title}</Text>
              {/* <Button title="View Article"
              buttonStyle={{width: 120, marginLeft: 10, }} 
              onPress={()=>{  navigation.navigate("Details", { user: 'Wojtek' }) }}/> */}
              <Text style={{fontSize: 12, padding: 10, paddingTop: 2, color: '#787878'}}>@{data.source.name}</Text>
            </TouchableOpacity>
          </Card>
          }
        })
      }
      
      </ScrollView>

      {/* <Text>Home Screen</Text>
      <Button title="go to second screen" onPress={()=>{  navigation.navigate("Details", { user: 'Wojtek' }) }}/> */}
    </SafeAreaView>
  );
}





