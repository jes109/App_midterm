import React from "react";
import { useState } from "react";
import SegmentedControlTab from "react-native-segmented-control-tab"
import { Box,Center,Pressable,Text ,FlatList} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

import EventList from "../components/EventList"
import EventItem from "../components/EventItem";

import Events from "../json/Events.json"

export default SaveScreen = () => {
    const [segmentIndex,setSegmentIndex] = useState(0);

    const SegmentContent = () =>{
        return(
            !segmentIndex? <Join/>:<Mark/>
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
    const renderItem=({item})=>item.mark?<EventItem event={item}/>:null;

    return(
        <FlatList
        data={Events}
        renderItem={renderItem}
        keyExtractor={(item,index)=>index+item}
        />
    )
}
const Join=()=>{
    const renderItem=({item})=>item.join?<EventItem event={item}/>:null;

    return(
        <FlatList
        data={Events}
        renderItem={renderItem}
        keyExtractor={(item,index)=>index+item}
        />
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
