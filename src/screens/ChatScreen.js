import React from "react";
import { View, Box, Image, Pressable, Text, Center } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { useTheme } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

import ChatList from "../components/ChatList";
//import ChatHeader from "../components/ChatHeader"
import { SafeAreaProvider } from "react-native-safe-area-context";

export default ChatScreen = ({navigation}) => {
    const {colors} =useTheme();
    return(
        //<Box bg={"#ADB7A8"}>
            <SafeAreaProvider>
                <View style={{flex: 1}}>
                    <Center><ChatList/></Center>
                </View>
            </SafeAreaProvider>
        //</Box>
    )
}
