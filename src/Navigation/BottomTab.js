import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./HomeStack"
import ChatStack from "./ChatStack";
import SettingStack from "./SettingStack";
import MyEventsStack from "./MyEventsStack";

const Tab = createBottomTabNavigator();

export default () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="首頁" component={HomeStack} />
            <Tab.Screen name="我的活動" component={MyEventsStack} />
            <Tab.Screen name="聊天室" component={ChatStack} />
            <Tab.Screen name="設定" component={SettingStack} />
        </Tab.Navigator>
    );
}