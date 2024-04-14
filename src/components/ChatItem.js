import React from "react";
import { Box, Image, View, Text } from "@gluestack-ui/themed";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import { Circle } from "react-native-svg";

export default ChatItem =({chat})=>{
    const {navigate} = useNavigation();
    return(
        <Box bg="#fff"  w="$4/5" rounded="$xl" mb={20}>
            <Image
                style={styles.icon} 
                source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/account_circle_FILL0_wght400_GRAD0_opsz24%20(1).svg"}}
            />
            <Box  py={20} pl={8}>
                <Text size="xl">{chat.title}</Text>
                <Text size="s" mt={8}>{chat.message}</Text>
            </Box>
        </Box>
    );
}

const styles=StyleSheet.create(
    {
        icon: {
            height: 50,
            width: 50
        }
    }
);
