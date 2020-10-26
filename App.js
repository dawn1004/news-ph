import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements'


import Health from "./src/tabs/health"
import Sport from "./src/tabs/sport"
import General from "./src/tabs/general"
import Entertainment from "./src/tabs/entertainment"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        swipeEnabled:true
      }}
      tabBarOptions={{
        activeTintColor: 'grey',
        // activeBackgroundColor: '#f2f2f2',
        // inactiveBackgroundColor: '#FF0000',
        inactiveTintColor:  '#FFFFFF',
        style: {
          position: 'absolute',
          paddingBottom:10,
          left: 0,
          bottom: 0,
          right: 0,
          height: 75,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        },
      }}
      >
        <Tab.Screen 
        name="Health"
        component={Health} 
        options={{
          tabBarLabel: 'Health',
          tabBarIcon: () => 
          <Icon 
          type='font-awesome'
          name={'heartbeat'} color={'#dc3545'} size={30} />,
        }}
        />
        <Tab.Screen 
        name="Sport" 
        component={Sport}
        options={{
          tabBarLabel: 'Sport',
          tabBarIcon: () => 
          <Icon 
          type='font-awesome-5'
          name={'baseball-ball'} color={'orange'} size={30} />,
        }} 
        />
        <Tab.Screen 
        name="General" 
        component={General}
        options={{
          tabBarLabel: 'General',
          tabBarIcon: () => 
          <Icon 
          type='font-awesome'
          name={'globe'} color={'#28a745'} size={30} />,
        }} 
        />
        <Tab.Screen 
        name="Entertainment" 
        component={Entertainment} 
        options={{
          tabBarLabel: 'Entertainment',
          tabBarIcon: () => 
          <Icon 
          type='font-awesome'
          name={'music'} color={'#007bff'} size={30} />,
        }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}