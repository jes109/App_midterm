import React from "react";
import { Box,Image,Pressable,Text,Center, Input, InputField } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

import EventList from "../components/EventList"

export default Home = () => {
    const {colors} =useTheme();
    return(
        <Box bg={colors.surface}>
        <Center mt={16}>
            <Input variant="rounded" size="lg" mb={16} w={360}>
            <InputField placeholder="search" bg="#fff"/>
            </Input>
            <EventList/>
        </Center>
        </Box>
    )
}
