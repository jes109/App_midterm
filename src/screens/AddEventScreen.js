import React from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Box, FormControl, FormControlLabel, FormControlLabelText, Input, InputField, Text, HStack,Pressable,Icon,AddIcon, ScrollView} from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default AddEventScreen = () =>{
    const {colors} =useTheme();
    return(
        <ScrollView bg={colors.surface}>
        <Box alignItems="center"> 
            <Box bg={colors.lightsurface} w={350}rounded="$2xl" my={20} alignItems="center">
                <TextInput style={[styles.maininput,{backgroundColor:colors.midsurface},{color:colors.primary800}]} placeholder="活動名稱"/>
                <TouchableOpacity>
                    <Box mt={20} w={300} h={200} borderColor="gray" borderWidth={2} rounded="$2xl" alignItems="center" justifyContent="center">
                        <MaterialCommunityIcons name="upload" size={48} color="gray"/>
                        <Text color="gray">update image</Text>
                    </Box>
                </TouchableOpacity>
                <Box px={12} bg={colors.midsurface} w={300} h={320} rounded="$3xl" mt={20} mb={80}>
                    <HStack alignItems="center">
                        <Text color={colors.primary800} size="md" bold="true">日期 :</Text>
                        <TextInput style={[styles.secondInput,{color:colors.primary800}]} placeholder="ex.2023/04/14"/>
                    </HStack>
                    <HStack alignItems="center">
                        <Text color={colors.primary800} size="md" bold="true">地點 :</Text>
                        <TextInput style={[styles.secondInput,{color:colors.primary800}]} placeholder="地點"/>
                    </HStack>
                    <HStack alignItems="center">
                        <Text color={colors.primary800} size="md" bold="true">人數 :</Text>
                        <TextInput style={[styles.secondInput,{color:colors.primary800}]} placeholder="人數"/>
                    </HStack>
                    <HStack alignItems="center">
                        <Text color={colors.primary800} size="md" bold="true">敘述 :</Text>
                        <TextInput style={[styles.secondInput,{color:colors.primary800}]} placeholder="敘述"/>
                    </HStack>
                </Box>
                <Pressable bg={colors.primaryContainer} style={styles.fab} py={12} rounded="$full">
                <HStack flex={1} justifyContent="center">
                    <Icon as={AddIcon} color={colors.primary800}/>
                    <Text color={colors.primary800} bold="true">新增</Text>
                </HStack>
            </Pressable>
            </Box>
        </Box>
        </ScrollView>
    );
}

const styles=StyleSheet.create({
    maininput:{
        marginTop:20,
        borderRadius:28,
        padding:16,
        width:300,
        fontSize:24,
        fontWeight:"bold"
    },
    secondInput:{
        borderRadius:28,
        padding:16,
        width:300,
        fontSize:16,
    },
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
});