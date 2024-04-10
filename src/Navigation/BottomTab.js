import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./HomeStack"
import ChatStack from "./ChatStack";
import SettingStack from "./SettingStack";
import SaveStack from "./SaveStack";

const Tab = createBottomTabNavigator();

//Tab的title名稱如果有更適當的可再修改
export default () =>{ 
    return(
        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeStack} 
            options={{
                title:"找活動" 
            }}
            />
            <Tab.Screen name="save" component={SaveStack} 
            options={{
                title:"我的活動"
            }}
            />
            <Tab.Screen name="chat" component={ChatStack} 
            options={{
                title:"聊天室"
            }}
            />
            <Tab.Screen name="setting" component={SettingStack} 
             options={{
                title:"設定"
            }}
            />
        </Tab.Navigator>
    );
}