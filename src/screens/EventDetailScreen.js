import React from "react";
import { useTheme } from "@react-navigation/native";
import { Box,Image,Text,HStack,VStack, ScrollView, Fab,FabIcon,FabLabel, AddIcon, Pressable, Icon, Center} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

export default EventDetail = ({route}) => {
    const { colors } = useTheme();
    const {title,location,img,date,limit,number,trait,description}=route.params;
    return(
        <Box flex={1}>
            <ScrollView>
                <Box bg={colors.card} pt={20} px={16} >
                    <Text size="2xl" bold="true" color={colors.primary800} mb={8}>{title}</Text>
                    <Image source={img} alt="pic" w="auto" h={200} mb={20} rounded="$2xl"/>
                    <HStack justifyContent="space-between" borderBottomWidth={1} borderBottomColor={colors.primary200} pb={16}>
                        <VStack gap={8}>
                            <Text size="md" bold="true" color={colors.primary500}>日期:{date}</Text>
                            <Text size="md" bold="true" color={colors.primary500}>地點:{location}</Text>
                            <Text size="md" bold="true" color={colors.primary500}>人數:{limit}</Text>
                            <Text size="md" bold="true" color={colors.primary500}>建議條件:{trait}</Text>
                        </VStack>
                        <Text mt={96} px={12} py={4} size="md" rounded="$2xl" bold="true" color={colors.primary500}  borderColor={colors.primary500} borderWidth={1} >目前參與人數:{number}</Text>
                    </HStack>
                    <Text color="black" mt={20} size="md" bold="true" >{description}</Text>
                </Box>
            </ScrollView>
            <Pressable bg={colors.primaryContainer} style={styles.fab} py={12} rounded="$full">
                <HStack flex={1} justifyContent="center">
                    <Icon as={AddIcon} color={colors.primary800}/>
                    <Text color={colors.primary800} bold="true">參加</Text>
                </HStack>
            </Pressable>
        </Box>
           
    )
}
const styles=StyleSheet.create({
    fab:{
        width:80,
        position:"absolute",
        right:12,
        bottom:20,
        zIndex:999,
        shadowColor: "#000",
        shadowOffset: {
	        width: 2,
	        height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10,
    }
})

/*
<Fab bg={colors.primaryContainer} >
                    <FabIcon color={colors.primary800} as={AddIcon} />
                    <FabLabel color={colors.primary800} fontWeight="$bold" >參加</FabLabel>
                </Fab>
*/ 