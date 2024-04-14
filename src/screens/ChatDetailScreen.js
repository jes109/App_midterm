
import React from "react";
import { Box, Image, Text } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

export default ChatDetail = ({route}) => {
    const {title, message, img}=route.params;
    return(
        <Box bg="#fff" w="$80">
            <Text size="xl">{title}</Text>
            <Text>{message}</Text>
            <Image
                style={styles.icon} 
                source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/account_circle_FILL0_wght400_GRAD0_opsz24.png"}}
            />
        </Box>
    )
}

const styles=StyleSheet.create(
    {
        icon: {
            height: 50,
            width: 50
        }
    }
);