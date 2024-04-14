
import React from "react";
import { View, Box, Image, Pressable, Text, Center } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

import ChatList from "../components/ChatList";
import Header from "../components/Header"
import { SafeAreaProvider } from "react-native-safe-area-context";

export default ChatScreen = ({navigation}) => {
    return(
        <SafeAreaProvider>
            <View style={{flex: 1}}>
                <Header />
                <Center><ChatList/></Center>
                <ChatList/>
            </View>
        </SafeAreaProvider>
    )
}
