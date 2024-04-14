import React from "react";
import {createStackNavigator} from "@react-navigation/stack"

import ChatScreen from "../screens/ChatScreen";
import ChatDetailScreen from "../screens/ChatDetailScreen";

const Stack = createStackNavigator();

export default ChatStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Chat" component={ChatScreen} 
            //options={{
            //    title:"我的"
            //}}
            />
            <Stack.Screen name="ChatDetail" component={ChatDetailScreen} 
            // options={{
            //    title:"活動細節"
            //}}
            />
        </Stack.Navigator>
    )
}