import React from "react";
import { useState } from "react";
import { Box,Pressable,Text } from "@gluestack-ui/themed";
import {createStackNavigator} from "@react-navigation/stack"
import { useTheme } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import HomeScreen from "../screens/HomeScreen"
import EventDetailScreen from "../screens/EventDetailScreen";

const Stack = createStackNavigator();

//Stack的title名稱如果有更適當的可再修改
export default Home = () => {
    const {colors}=useTheme();
    const [notify,setNotify]=useState(true);
    let notifyIcon=notify?"bell-badge":"bell";

    const checkNotify= ()=>setNotify(!notify);
    
    return(
        <Stack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor:colors.header,
            },
            headerTitleStyle:{
                color:colors.primary800,
                fontSize:20
            }
        }}>
            <Stack.Screen name="findEvent" component={HomeScreen} 
            options={{
                title:"探索活動",
                headerRight:()=>(
                    <Pressable pr={12}>
                        <MaterialCommunityIcons name={notifyIcon} size={24} color={colors.primary800} 
                        onPress={notify?checkNotify:null} /> 
                    </Pressable>
                )
            }}
            />
            <Stack.Screen name="detail" component={EventDetailScreen} 
             options={{
                title:"活動內容",
                headerStyle:{
                    backgroundColor:colors.darksurface
                }
            }}
            />
        </Stack.Navigator>
    )
}