import React from "react";
import { Box,Text } from "@gluestack-ui/themed";
import {createStackNavigator} from "@react-navigation/stack"

import HomeScreen from "../screens/HomeScreen"
import EventDetailScreen from "../screens/EventDetailScreen";

const Stack = createStackNavigator();

//Stack的title名稱如果有更適當的可再修改
export default Home = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="findEvent" component={HomeScreen} 
            options={{
                title:"探索活動"
            }}
            />
            <Stack.Screen name="detail" component={EventDetailScreen} 
             options={{
                title:"活動內容"
            }}
            />
        </Stack.Navigator>
    )
}