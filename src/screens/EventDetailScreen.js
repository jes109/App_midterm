import React from "react";
import { useTheme } from "@react-navigation/native";
import { Box,Image,Text,HStack,VStack, ScrollView, Fab,FabIcon,FabLabel, AddIcon} from "@gluestack-ui/themed";

export default EventDetail = ({route}) => {
    const { colors } = useTheme();
    const {title,location,img,date,limit,number,trait,description}=route.params;
    return(
        <ScrollView>
            <Box flex={1} bg={colors.card} pt={20} px={28}>
                <Text size="2xl" bold="true" color={colors.primary800} mb={8}>{title}</Text>
                <Image source={img} alt="pic" w="auto" h={200} mb={20} rounded="$2xl"/>
                <HStack justifyContent="space-between" borderBottomWidth={1} borderBottomColor={colors.primary200} pb={20}>
                    <VStack>
                        <Text size="md" bold="true" color={colors.primary500}>日期:{date}</Text>
                        <Text size="md" bold="true" color={colors.primary500}>地點:{location}</Text>
                        <Text size="md" bold="true" color={colors.primary500}>人數:{limit}</Text>
                        <Text size="md" bold="true" color={colors.primary500}>建議條件:{trait}</Text>
                    </VStack>
                    <Text mt={64} px={12} py={4} size="md" rounded="$2xl" bold="true" color={colors.primary500}  borderColor={colors.primary500} borderWidth={2} >目前參與人數:{number}</Text>
                </HStack>
                <Text mt={20} size="md" bold="true">{description}</Text>
                <Fab bg={colors.primaryContainer} >
                    <FabIcon color={colors.primary800} as={AddIcon} />
                    <FabLabel color={colors.primary800} fontWeight="$bold" >參加</FabLabel>
                </Fab>
            </Box>
        </ScrollView>
    )
}