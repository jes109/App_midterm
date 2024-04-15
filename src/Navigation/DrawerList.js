import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationProvider } from "./NavigationContext";

import ChatStack from "./ChatStack";
import HomeStack from "./HomeStack";
import SaveStack from "./SaveStack";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerList = () =>{
    return(
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}

const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="HomeStack">
            <Drawer.Screen 
                name="HomeStack"
                component={HomeStack}
                options={{
                    title: "Home",
                    headerShown: false
                }}
            />
            <Drawer.Screen 
                name="ChatStack"
                component={SettingStack}
                options={{
                    title: "chat",
                    headerShown: false
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerList;