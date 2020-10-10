import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons';

export function DrawerContent(props) {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                      <View style={{flexDirection:'row', marginTop: 15}}>
                        <Avatar.Image 
                          source={{
                            uri: 'https://www.w3schools.com/howto/img_avatar.png'
                          }}
                          size={50}
                        />
                        <View style={{marginLeft: 15, flexDirection: 'column'}}>
                          <Title style={styles.title}>Juan Isaza</Title>
                          <Caption style={styles.caption}>juan.isazam@upb.edu.co</Caption>
                        </View>
                      </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                            label="Home"
                            onPress={() => {}}
                        />
                      <DrawerItem 
                        label="Mis Mascotas" 
                        onPress={() => {}} 
                      />   
                      <DrawerItem 
                        label="Agenda" 
                        onPress={() => {}} 
                      />  
                      <DrawerItem 
                        label="Saldo" 
                        onPress={() => {}} 
                      />  
                      <DrawerItem 
                        label="Ayuda" 
                        onPress={() => {}} 
                      />     
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style = {styles.bottonDrawerSection}>
              <DrawerItem 
              label="Cerrar sesión" 
              onPress={() => {}} 
              />         
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });