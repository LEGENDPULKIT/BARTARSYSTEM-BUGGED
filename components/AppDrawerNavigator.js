import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import HomeScreen from '../screens/HomeScreen';


export const AppDrawerNavigator=createDrawerNavigator({
    HomeScreen:{
        screen:AppTabNavigator
    },

    Settings:{
        screen:SettingScreen
    },

},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'HomeScreen'
}
)