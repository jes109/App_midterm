import React from "react";
import { View, Box, Image, Pressable, Text, Center } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

import ChatList from "../components/ChatList";
import ChatHeader from "../components/ChatHeader"
import { SafeAreaProvider } from "react-native-safe-area-context";

export default ChatScreen = ({navigation}) => {
    return(
        <SafeAreaProvider>
            <View style={{flex: 1}}>
                <ChatHeader />
                <Center><ChatList/></Center>
            </View>
        </SafeAreaProvider>
    )
}
