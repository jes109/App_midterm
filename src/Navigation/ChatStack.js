import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { View, Pressable, Image } from "@gluestack-ui/themed";
import { useTheme } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { useNavigationContext } from "./NavigationContext";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";

import ChatScreen from "../screens/ChatScreen";
import ChatDetailScreen from "../screens/ChatDetailScreen";
import DrawerList from "./DrawerList";

const Stack = createStackNavigator();

export default ChatStack = () => {
    const navigation = useNavigation("DrawerList");

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
                headerLeft: () => (
                    <Pressable onPress={() => navigation.toggleDrawer()}>
                        <Image 
                            style={styles.icon}
                            source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/icon_menu%20(1).png?raw=true"}}
                            alt="icon"
                        />
                    </Pressable>
                   // <MaterialCommunityIcons 
                   //     name={"menu"}
                   //     size={30}
                   //     onPress={() => navigation.toggleDrawer()}
                   //     style={{marginRight: 20}}
                   // />
                )
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
        },
        icon: {
            width: 30,
            height: 30
        }
    }
);