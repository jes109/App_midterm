import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Drawer = createDrawerNavigator();

export default () =>{
    return(
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}

const MyDrawer = () => {
    return (
        <Drawer.Navigator 
            initialRouteName="HomeStack"
        >
            <Drawer.Screen 
                name="HomeStack"
                component={HomeStack}
                options={{
                    title: "Home",
                    headerShown: false
                }}
            />
            <Drawer.Screen 
                name="SettingStack"
                component={SettingStack}
                options={{
                    title: "Setting",
                    headerShown: false
                }}
            />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    drawImg: {
        width: 50,
        height: 50,
        marginTop: 40,
        marginLeft: 20,
        marginBottom: 15
    },
    username: {
        fontSize: 24,
        marginBottom: 20,
        marginLeft: 20,
        fontWeight: "bold"
    },
    line: {
        width: "100%",
        height: 2,
        backgroundColor: "#D3D3D3",
        marginTop: 10,
        marginBottom: 10
    }
});