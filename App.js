import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("Details")}
        />
    </View>
  );
};

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to details screen... again"
        onPress={() => navigation.push("Details")}
        />
        <Button
        title="Go to home"
        onPress={() => navigation.navigate("Home")}
        />
        <Button
        title="Go back"
        onPress={() => navigation.goBack()}
        />
        <Button
        title="Go to the first screen"
        onPress={() => navigation.popToTop()}
        />
    </View>
  );
};

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
  <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
      headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} 
      backgroundColor="#009387" onPress={() => navigation.
      openDrawer()}></Icon.Button>
)
  }} />
</DetailsStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

