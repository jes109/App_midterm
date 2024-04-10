import React from "react";
import { useState } from "react";
import SegmentedControlTab from "react-native-segmented-control-tab"
import { Box,Center,Pressable,Text } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

import { useNavigation } from '@react-navigation/native';


export default SaveScreen = () => {
    const [segmentIndex,setSegmentIndex] = useState(0);

    const SegmentContent = () =>{
        return(
            segmentIndex? <Join/>:<Mark/>
        );
    }
    return(
        <Box>
            <SegmentedControlTab 
            values={["已參加","收藏"]}
            selectedIndex={segmentIndex}
            onTabPress={(index)=>setSegmentIndex(index)}
            />
            <SegmentContent/>
        </Box>
    )
}

const Mark=()=>{
    const {navigate} =useNavigation();
    return(
        <Pressable onPress={()=>navigate("saveDetail")}>
        <Center>
            <Text  style={styles.btn}>點我看更多</Text>
        </Center>
        </Pressable>
    )
}
const Join=()=>{
    return(
        <Center>
            <Text>Join</Text>
        </Center>
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
