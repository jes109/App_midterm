import React from "react";
import {createStackNavigator} from "@react-navigation/stack"

import SaveScreen from "../screens/SaveScreen";
import EventDetailScreen from "../screens/EventDetailScreen";

const Stack = createStackNavigator();

export default SaveStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Save" component={SaveScreen} 
            options={{
                title:"我的"
            }}
            />
            <Stack.Screen name="saveDetail" component={EventDetailScreen} 
             options={{
                title:"活動細節"
            }}
            />
        </Stack.Navigator>
    )
}