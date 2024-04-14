import React from "react";
import { Box,Image,Pressable,Text,Center, Input, InputField ,Fab,FabIcon,AddIcon} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

import EventList from "../components/EventList"

export default Home = () => {
    const {colors} =useTheme();
    return(
        <Box bg={colors.surface}>
            <Center>
                <EventList/>
                <Fab bg={colors.primaryContainer} >
                    <FabIcon color={colors.primary800} as={AddIcon} />
                </Fab>
            </Center>
        </Box>
    )
}
