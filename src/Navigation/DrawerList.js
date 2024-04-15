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
import BottomTab from "./BottomTab";

//const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerList = () =>{
    return(
            <MyDrawer />
    );
}

const MyDrawer = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen 
                name="HomeStack"
                component={BottomTab}
                options={{
                    title: "Home",
                    headerShown: false
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerList;