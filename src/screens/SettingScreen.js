import React from "react";
import { View, Box, Image, Pressable, Text, Center } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

import SettingList from "../components/SettingList";
import SettingHeader from "../components/SettingHeader"
import { SafeAreaProvider } from "react-native-safe-area-context";

export default SettingScreen = ({navigation}) => {
    return(
        <SafeAreaProvider>
            <View style={{flex: 1}}>
                <SettingHeader />
                <Center><SettingList/></Center>
            </View>
        </SafeAreaProvider>
    )
}