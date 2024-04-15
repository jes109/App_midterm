import React from "react";
import { useTheme } from "@react-navigation/native";
import { View, Box, Image, Pressable, Text, Center, ScrollView } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ChatList from "../components/ChatList";
import ChatHeader from "../components/ChatHeader"
import { SafeAreaProvider } from "react-native-safe-area-context";

export default ChatScreen = ({navigation}) => {
    const {colors} =useTheme();
    return(
            <ScrollView bg={colors.card} flex={1}>
                <Center>
                    <ChatList/>
                    <Image rounded="$xl" source={"https://github.com/jes109/App_midterm/blob/master/src/img/cover.png?raw=true"} alt="d" h={60} w={60}/>
                </Center>
            </ScrollView>
    )
}
