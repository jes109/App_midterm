import React from "react";
import {createStackNavigator} from "@react-navigation/stack"

import SettingScreen from "../screens/SettingScreen";

const Stack = createStackNavigator();

export default ChatStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Setting" component={SettingScreen} 
            options={{
                title: "設定",
                headerShown: false
            }}
            />
        </Stack.Navigator>
    )
}