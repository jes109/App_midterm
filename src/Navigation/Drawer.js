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

const CustomDrawerContent = (props) => {
    const HorizontalLine = () => {
        return (
            <View style={styles.line} />
        );
    };

    return (
        <DrawerContentScrollView {...props}
            contentContainerStyle={{paddingTop: 0}}
        >
            <Image
                style={styles.drawImg}
                source={{uri: "https://github.com/st-56/ReactNative_wk3_BookList/blob/main/assets/bookimg/img_avatar.png?raw=true"}}
            />
            <Text style={styles.username}>
                May
            </Text>
            <HorizontalLine />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const MyDrawer = () => {
    return (
        <Drawer.Navigator 
            initialRouteName="HomeStack"
            screenOptions={{
                drawerActiveBackgroundColor: "white",
                drawerActiveTintColor: "#6200EE",
                drawerInactiveTintColor: "gray",
                drawerStyle: {width: 250},
                drawerLabelStyle: {fontSize: 18, fontWeight: '400'}
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen 
                name="AccountStack"
                component={AccountStack}
                options={{
                    title: "Account",
                    headerShown: false,
                    drawLabel: "Account",
                    drawerIcon: ({color}) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                    )
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