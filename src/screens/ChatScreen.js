import React from "react";
import { View, Box, Image, Pressable, Text, Center } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

import ChatList from "../components/ChatList";
import Header from "../components/Header"
import { SafeAreaProvider } from "react-native-safe-area-context";

export default Chat = ({navigation}) => {
    return(
        <SafeAreaProvider>
            <View style={{flex: 1}}>
                <Header />
                <Center><ChatList/></Center>
            </View>
        </SafeAreaProvider>
    )
}

const styles=StyleSheet.create(
    {
        //btn:{
        //    padding:10,
        //    width:150,
        //    color: "white",
        //    backgroundColor: "black"
        //}
    }
);
