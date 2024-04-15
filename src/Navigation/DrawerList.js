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
        <Drawer.Navigator 
        drawerContent={props => <CustomDrawerContent {...props} />}
        >
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
                alt="user"
            />
            <Text style={styles.username}>
                May
            </Text>
            <View style={styles.hinta}>
                <Text style={styles.intro}>May小姐您好，</Text>
                <Text style={styles.intro}>您現在是三星會員!</Text>
                <Text style={styles.intro}>來啾揪找旅伴，與您開心一起玩!</Text>
            </View>
            <HorizontalLine />
            <DrawerItemList {...props} />
            <HorizontalLine />
            <View style={styles.hintb}>
                <Text style={styles.intro}>出遊找啾揪，</Text>
                <Text style={styles.intro}>歡樂多更多!</Text>
            </View>
            <HorizontalLine />
            <View style={styles.hintc}>
                <Text style={styles.intro}>啾揪祝您</Text>
                <Text style={styles.intro}>身體健康  萬事如意!</Text>
            </View>
            <HorizontalLine />
            <Image
                style={styles.logoImg}
                source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/logo.png?raw=true"}}
                alt="logo"
            />
        </DrawerContentScrollView>
    );
}

const styles=StyleSheet.create(
    {
        drawImg: {
            width: 50,
            height: 50,
            marginTop: 40,
            marginLeft: 20,
            marginBottom: 15
        },
        logoImg: {
            width: 280,
            height: 160,
            marginTop: 25,
            //marginRight: 0
            //marginLeft: 10,
            //marginBottom: 15
        },
        username: {
            fontSize: 24,
            marginBottom: 20,
            marginLeft: 20,
            fontWeight: "bold"
        },
        intro: {
            fontSize: 16,
            marginLeft: 20,
            marginBottom: 5
        },
        hinta: {
            marginBottom: 20
        },
        hintb: {
            marginTop: 15,
            marginBottom: 20
        },
        hintc: {
            marginTop: 15,
            marginBottom: 20
        },
        line: {
            width: "100%",
            height: 2,
            backgroundColor: "#D3D3D3",
            marginTop: 10,
            marginBottom: 10
        }
    });

export default DrawerList;