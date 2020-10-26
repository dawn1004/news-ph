import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Icon, Card, Text ,Button } from 'react-native-elements'
// import { WebView } from 'react-native-webview'


export default function NewsDetails({route}) {
    const data = route.params;
    console.log(data)
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ScrollView>
            <Card containerStyle={{borderRadius: 10, marginBottom: 100}}>
                <View style={{minWidth: 300}}>
                    <Image
                    style={{width: 'auto', height: 200, borderTopLeftRadius: 10, borderRadius: 10, marginBottom: 20}}
                    resizeMode="cover"
                    source={{ uri: data.urlToImage }}
                    />
                    <Text h4 style={{color: "#4d4d4d", marginBottom: 5}}>
                        {data.title}
                    </Text>

                    <Text style={{ color: '#787878', fontSize: 12}}>
                        {data.publishedAt}
                    </Text>
  
                    <Text style={{ color: '#4d4d4d', fontSize: 18, marginTop: 20,   textAlign: 'justify'}}>
                        {data.description}
                    </Text>
                    <Text style={{ color: '#4d4d4d', fontSize: 18, marginTop: 20,   textAlign: 'justify'}}>
                        {data.content}
                    </Text>
                  
                    <Text style={{ color: '#4d4d4d', fontSize: 14, marginTop: 20}}>
                        <Text style={{ color: '#787878', fontSize: 12}}>
                            Author: 
                        </Text>
                        {data.source.name}
                    </Text> 
                </View>
            </Card>              
          </ScrollView>

 
      </View>
    );
  }
  