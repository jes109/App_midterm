import React from "react";
import { useState } from "react";
import SegmentedControlTab from "react-native-segmented-control-tab"
import { Box,Center,Pressable,Text ,FlatList} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { useNavigation,useTheme } from '@react-navigation/native';

import EventList from "../components/EventList"
import EventItem from "../components/EventItem";

import Events from "../json/Events.json"

export default SaveScreen = () => {
    const {colors} =useTheme();

    const [segmentIndex,setSegmentIndex] = useState(0);
    const SegmentContent = () =>!segmentIndex? <Join/>:<Mark/>

    return(
        <Box bg={colors.surface}>
            <SegmentedControlTab 
            values={["已參加","收藏"]}
            tabStyle={{
                marginTop:20,
                marginBottom:20,
                borderWidth:2,
                backgroundColor:"transparent",
                borderColor:colors.primary800
            }}
            firstTabStyle={{
                marginLeft:20
            }}
            lastTabStyle={{
                marginRight:20
            }}
            tabTextStyle={{
                color:colors.primary800
            }}
            activeTabStyle={{
                backgroundColor:colors.lightsurface
            }}
            activeTabTextStyle={{
                color:colors.primary800
            }}
            selectedIndex={segmentIndex}
            onTabPress={(index)=>setSegmentIndex(index)}
            />
            <SegmentContent/>
        </Box>
    )
}

const Mark=()=>{
    const renderItem=({item})=>item.mark?<EventItem event={item}/>:null;

    return(
        <Center >
            <FlatList
            data={Events}
            renderItem={renderItem}
            keyExtractor={(item,index)=>index+item}
            showsVerticalScrollIndicator={false}
            />
        </Center>
    )
}
const Join=()=>{
    const renderItem=({item})=>item.join?<EventItem event={item}/>:null;

    return(
        <Center>
            <FlatList
            data={Events}
            renderItem={renderItem}
            keyExtractor={(item,index)=>index+item}
            showsVerticalScrollIndicator={false}
            />
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
