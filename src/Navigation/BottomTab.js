import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"

import HomeStack from "./HomeStack"
import ChatStack from "./ChatStack";
import SettingStack from "./SettingStack";
import SaveStack from "./SaveStack";

const Tab = createBottomTabNavigator();

//Tab的title名稱如果有更適當的可再修改
export default () =>{ 
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown:false
        }}
        >
            <Tab.Screen name="home" component={HomeStack} 
            options={{
                title:"找活動",
                tabBarIcon:({color})=>( <AntDesign name='find' color={color} size={26}/>)
            }}
            />
            <Tab.Screen name="save" component={SaveStack} 
            options={{
                title:"我的活動",
                tabBarIcon:({color})=>( <AntDesign name='book' color={color} size={26}/>)
            }}
            />
            <Tab.Screen name="chat" component={ChatStack} 
            options={{
                title:"聊天室",
                tabBarIcon:({color})=>( <MaterialCommunityIcons name='chat-processing-outline' color={color} size={26}/>)
            }}
            />
            <Tab.Screen name="setting" component={SettingStack} 
             options={{
                title:"設定",
                tabBarIcon:({color})=>( <AntDesign name='setting' color={color} size={26}/>)
            }}
            />
        </Tab.Navigator>
    );
}