import React from "react";
import { Box,Pressable,Text } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

export default Home = ({navigation}) => {
    return(
        <Pressable onPress={()=>navigation.navigate("detail")}>
            <Text style={styles.btn}>點我看更多</Text>
        </Pressable>
    )
}

const styles=StyleSheet.create(
    {
        btn:{
            padding:10,
            width:150,
            color:"#fff",
            backgroundColor:"black"
        }
    }
);
