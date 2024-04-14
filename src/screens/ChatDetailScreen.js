import React from "react";
import { Box, Image, Text } from "@gluestack-ui/themed";

export default ChatDetail = ({route}) => {
    const {title, message, img}=route.params;
    return(
        <Box bg="#fff" w="$80">
            <Text size="xl">{title}</Text>
            <Text>{message}</Text>
            <Image source={img} alt="pic" w="$72"/>
        </Box>
    )
}