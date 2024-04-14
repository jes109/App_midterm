import React from "react";
import { Box,Image,Pressable,Text,Center, Input, InputField ,Fab,FabIcon,EditIcon ,HStack,Icon,AddIcon} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import EventList from "../components/EventList"

export default Home = () => {
    const {colors} =useTheme();
    const {navigate}=useNavigation();
    return(
        <Box bg={colors.surface}>
            <Center>
                <EventList/>
                <Pressable bg={colors.primaryContainer} style={styles.fab} p={16} rounded="$full" 
                onPress={()=>navigate("add")
                }>
                    <MaterialCommunityIcons name="square-edit-outline" size={28} color={colors.primary800}/>
                </Pressable>
            </Center>
        </Box>
    )
}

const styles=StyleSheet.create({
    fab:{
        position:"absolute",
        right:8,
        bottom:16,
        zIndex:999,
        shadowColor: "#000",
        shadowOffset: {
	        width: 2,
	        height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,

        elevation: 10,
    }
})
