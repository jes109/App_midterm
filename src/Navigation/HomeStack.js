import React from "react";
import { useState } from "react";
import { Box,Pressable,Text } from "@gluestack-ui/themed";
import {createStackNavigator} from "@react-navigation/stack"
import { useNavigation, useTheme } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"

import HomeScreen from "../screens/HomeScreen"
import EventDetailScreen from "../screens/EventDetailScreen";
import AddEventScreen from "../screens/AddEventScreen";
import UnAddActionSheet from "../components/UnAddActionSheet";

const Stack = createStackNavigator();

//Stack的title名稱如果有更適當的可再修改
export default Home = () => {
    const {colors}=useTheme();
    const {goBack} =useNavigation();

    const [notify,setNotify]=useState(true);
    let notifyIcon=notify?"bell-badge":"bell";
    const checkNotify= ()=>setNotify(!notify);

    const [hasMark,setHasMark]=useState(false);
    let markIcon= hasMark?"bookmark":"bookmark-outline";
    let markIconColor= hasMark?colors.focus:colors.primary500;
    const setmark = ()=>setHasMark(!hasMark);

    
    return(
        <Stack.Navigator
        screenOptions={{
            headerStyle:{ backgroundColor:colors.header},
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
                title:"",
                headerStyle:{backgroundColor:colors.darksurface},
                headerLeft:()=>(
                    <Pressable pl={12}>
                        <AntDesign name="left" size={24} color={colors.primary800} onPress={()=>goBack()} /> 
                    </Pressable>
                ),
                headerRight:()=>(
                    <Pressable pr={12}>
                        <MaterialCommunityIcons name={markIcon} size={28} color={markIconColor} onPress={setmark} />
                    </Pressable>
                )
            }}
            />
            <Stack.Screen name="add" component={AddEventScreen}
            options={{
                title:"發起活動",
                headerLeft:()=>(
                    <UnAddActionSheet/>
                )
            }}/>
        </Stack.Navigator>
    )
}