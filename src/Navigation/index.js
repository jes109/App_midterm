import React from "react";
import { NavigationContainer } from "@react-navigation/native"

import BottomTab from "../Navigation/BottomTab"

import MyTheme from "../Theme"
import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import { Platform } from "react-native";

const Navigation = () => {
    return(
        <KeyboardAvoidingView
        flex={1}
        keyboardVerticalOffset={Platform.select({ios:0,android:-500})}
        behavior={Platform.OS==="ios"?"padding":"height"}
        >
            <NavigationContainer theme={MyTheme}>
                <BottomTab />
            </NavigationContainer>
        </KeyboardAvoidingView>
    );
}

export default Navigation; 