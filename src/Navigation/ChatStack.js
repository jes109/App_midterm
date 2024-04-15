import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { View, Pressable, Image } from "@gluestack-ui/themed";
import { useTheme } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";

import ChatScreen from "../screens/ChatScreen";
import ChatDetailScreen from "../screens/ChatDetailScreen";
//import Drawer from "./Drawer"

const Stack = createStackNavigator();
//const navigation = useNavigation();

export default ChatStack = () => {

    return(
        <Stack.Navigator
        screenOptions={{
            headerStyle:{ backgroundColor: "#F6F7E3"},
            headerTitleStyle:{
                color: "#194200",
                fontSize: 20
            }
        }}
        >
            <Stack.Screen name="Chat" component={ChatScreen} 
            options={{
                title: "聊天室",
                headerRight: () => (
                    <View style={styles.headerStyle}>
                        <View style={styles.icons}>
                            <Pressable style={{marginRight: 10}}>
                                <Image 
                                    style={styles.iconl} 
                                    source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/group_FILL0_wght400_GRAD0_opsz24%201.png?raw=true"}}
                                    alt="group"
                                />
                            </Pressable>
                            <Pressable>
                                <Image 
                                    style={styles.iconr} 
                                    source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/edit_square_FILL0_wght400_GRAD0_opsz24%201.png?raw=true"}}
                                    alt="post"
                                />
                            </Pressable>
                        </View>
                    </View>
                ),
                //headerLeft: () => (
                //    <MaterialCommunityIcons 
                //        name={"menu"}
                //        size={30}
                //        onPress={() => navigation.openDrawer}
                //        style={{marginRight: 20}}
                //    />
                //)
            }}
            />
        </Stack.Navigator>
    )
}

const styles=StyleSheet.create(
    {
        headerStyle: {
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 30,
            //paddingVertical: 20,
            flexDirection: "row"
        },
        iconl: {
            width: 30,
            height: 30,
            marginRight: 5
        },
        iconr: {
            width: 30,
            height: 30
        },
        icons: {
            flexDirection: "row"
        }
    }
);