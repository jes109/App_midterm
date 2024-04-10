import React from "react";
import { Box,Image,Pressable,Text} from "@gluestack-ui/themed";
import { useNavigation } from '@react-navigation/native';

export default EvenItem =({event})=>{
    const {navigate} = useNavigation();
    return(
        <Box bg="#fff"  w="$4/5" rounded="$xl" overflow="hidden" mb={20}>
            <Pressable onPress={()=>navigate("detail",event)}>
                <Image source={{uri:`${event.img}`}} alt="bird" w="$full"/>
            </Pressable>
            <Box  py={20} pl={8}>
                <Text size="xl">{event.title}</Text>
                <Text size="s" mt={8}>{event.location}</Text>
            </Box>
            </Box>
    );
}