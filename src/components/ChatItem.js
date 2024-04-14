import React from "react";
import { StyleSheet } from "react-native";
import { Box, Image, View, Text, Pressable } from "@gluestack-ui/themed";
import { useNavigation } from '@react-navigation/native';

export default ChatItem =({chat})=>{
    const {navigate} = useNavigation();
    return(
        <View style={styles.card}>
            <Pressable>
                <Image 
                    style={styles.icon} 
                    source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/account_circle_FILL0_wght400_GRAD0_opsz24%201.png?raw=true"}}
                    alt="user"
                />
            </Pressable>
            <View style={styles.text}>
                <Text style={styles.title}>{chat.title}</Text>
                <Text style={styles.message}>{chat.message}</Text>
            </View>
        </View>
    );
}

const styles=StyleSheet.create(
    {
        icon: {
            height: 50,
            width: 50,
            marginLeft: 15
        },
        title: {
            fontSize: 25
        },
        message: {
            fontSize: 20,
            color: "gray"
        },
        card: {
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 15
        },
        text: {
            marginLeft: 20
        }
    }
);