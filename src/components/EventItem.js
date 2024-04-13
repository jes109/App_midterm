import React from "react";
import { useState } from "react";
import { Box,HStack,Image,Pressable,Text, VStack} from "@gluestack-ui/themed";
import { useNavigation,useTheme } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default EvenItem =({event})=>{
    const {navigate} = useNavigation();
    const { colors } = useTheme();

    const markIcon= event.mark?"bookmark":"bookmark-outline";
    const markIconColor= event.mark?colors.focus:colors.primary500;

    return(
        <Box w={350} rounded="$xl" overflow="hidden" mb={20}>
            <TouchableOpacity activeOpacity={0.5} onPress={()=>navigate("detail",event)}>
                <Image source={{uri:`${event.img}`}} alt="bird" w="$full" h={132}/>
            </TouchableOpacity>
            <Box bg={colors.card} pt={12} pb={20} px={8} >
                <HStack justifyContent="space-between">
                    <VStack>
                        <Text fontSize={20} bold="true" color={colors.primary800}>{event.title}</Text>
                        <Text size="s" bold="true" mt={8} color={colors.primary500}>{event.location}</Text>
                    </VStack>
                    <Box height={"$full"} >
                    <MaterialCommunityIcons name={markIcon} size={28} color={markIconColor} />
                    </Box>
                </HStack>

            </Box>
            </Box>
    );
}