import React from "react";
import { Box,Image,Text } from "@gluestack-ui/themed";

export default EventDetail = ({route}) => {
    const {title,location,img,date,limit,number,trait,description}=route.params;
    return(
        <Box bg="#fff" w="$80">
            <Text size="xl">{title}</Text>
            <Image source={img} alt="pic" w="$72"/>
            <Text>日期:{date}</Text>
            <Text>地點:{location}</Text>
            <Text>人數:{limit}</Text>
            <Text>建議條件:{trait}</Text>
            <Text>目前參與人數:{number}</Text>
            <Text mt={20}>{description}</Text>
        </Box>

    )
}