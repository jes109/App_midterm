import React from "react";
import { Box,Image,Pressable,Text} from "@gluestack-ui/themed";
import { useNavigation,useTheme } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";

export default EvenItem =({event})=>{
    const {navigate} = useNavigation();
    const { colors } = useTheme();
    return(
        <Box w={350} rounded="$xl" overflow="hidden" mb={20}>
            <TouchableOpacity activeOpacity={0.5} onPress={()=>navigate("detail",event)}>
                <Image source={{uri:`${event.img}`}} alt="bird" w="$full" h={132}/>
            </TouchableOpacity>
            <Box bg={colors.card} pt={12} pb={20} pl={8}>
                <Text fontSize={20} bold="true" color={colors.primary800}>{event.title}</Text>
                <Text size="s" bold="true" mt={8} color={colors.primary500}>{event.location}</Text>
            </Box>
            </Box>
    );
}