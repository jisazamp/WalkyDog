import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import DatesScreen from './DatesScreen';
import HelpScreen from './HelpScreen';
import DetailsScreen from './DetailsScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const DatesStack = createStackNavigator();
const HelpStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Dates"
        component={DatesScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: 'Overview',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} 
        backgroundColor="#009387" onPress={() => navigation.
        openDrawer()}></Icon.Button>
      )
    }} />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#1f65ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
  <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
      headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} 
      backgroundColor="#1f65ff" onPress={() => navigation.
      openDrawer()}></Icon.Button>
)
  }} />
</DetailsStack.Navigator>
);

const DatesStackScreen = ({navigation}) => (
  <DatesStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
  <DatesStack.Screen name="Dates" component={DatesScreen} options={{
      headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} 
      backgroundColor="#009387" onPress={() => navigation.
      openDrawer()}></Icon.Button>
)
  }} />
</DatesStack.Navigator>
);

const HelpStackScreen = ({navigation}) => (
  <HelpStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
  <HelpStack.Screen name="Help" component={HelpScreen} options={{
      headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} 
      backgroundColor="#009387" onPress={() => navigation.
      openDrawer()}></Icon.Button>
)
  }} />
</HelpStack.Navigator>
);
