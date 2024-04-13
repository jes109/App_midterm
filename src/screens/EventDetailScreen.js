import React from "react";
import { useTheme } from "@react-navigation/native";
import { Box,Image,Text,HStack,VStack } from "@gluestack-ui/themed";

export default EventDetail = ({route}) => {
    const { colors } = useTheme();
    const {title,location,img,date,limit,number,trait,description}=route.params;
    return(
        <Box flex={1} bg={colors.card} p={20}>
            <Text size="2xl" bold="true" color={colors.primary800} mb={8}>{title}</Text>
            <Image source={img} alt="pic" w={350} h={200} mb={20} rounded="$2xl"/>
            <HStack justifyContent="space-between">
                <VStack>
                    <Text size="md" bold="true" color={colors.primary500}>日期:{date}</Text>
                    <Text size="md" bold="true" color={colors.primary500}>地點:{location}</Text>
                    <Text size="md" bold="true" color={colors.primary500}>人數:{limit}</Text>
                    <Text size="md" bold="true" color={colors.primary500}>建議條件:{trait}</Text>
                </VStack>
                    <Text px={12} py={4} size="md" rounded="$2xl" bold="true" color={colors.primary500}  borderColor={colors.primary500} borderWidth={2} alignSelf="flex-end">目前參與人數:{number}</Text>
            </HStack>
           
            <Text mt={20} size="md" bold="true">{description}</Text>
        </Box>

    )
}