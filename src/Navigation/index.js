import React from "react";
import { NavigationContainer } from "@react-navigation/native"

import BottomTab from "../Navigation/BottomTab"

import MyTheme from "../Theme"

const Navigation = () => {
    return(
        <NavigationContainer theme={MyTheme}>
            <BottomTab />
        </NavigationContainer>
    );
}

export default Navigation; 