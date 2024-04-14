import React from "react";
import { Box,Image,Pressable,Text} from "@gluestack-ui/themed";
import { useNavigation } from '@react-navigation/native';

export default ChatItem =({chat})=>{
    const {navigate} = useNavigation();
    return(
        <Box bg="#fff"  w="$4/5" rounded="$xl" overflow="hidden" mb={20}>
            <Pressable onPress={()=>navigate("detail", chat)}>
                <Image source={{uri:`${chat.img}`}} alt="user" w="$full"/>
            </Pressable>
            <Box  py={20} pl={8}>
                <Text size="xl">{chat.title}</Text>
                <Text size="s" mt={8}>{chat.message}</Text>
            </Box>
        </Box>
    );
}