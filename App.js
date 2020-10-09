import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon from 'react-native-vector-icons/Ionicons';

// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';
import DatesScreen from './screens/DatesScreen';
import HelpScreen from './screens/HelpScreen';
import MainTabScreen from './screens/MainTabScreen'

// const HomeStack = createStackNavigator();
// const DetailsStack = createStackNavigator();
const DatesStack = createStackNavigator();
const HelpStack = createStackNavigator();
const Drawer = createDrawerNavigator();

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

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Details" component={DetailsStackScreen} />
        <Drawer.Screen name="Dates" component={DatesStackScreen} />
        <Drawer.Screen name="Help" component={HelpStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

