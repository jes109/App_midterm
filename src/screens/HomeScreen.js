import React from "react";
import { Box,Image,Pressable,Text,Center } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

import EventList from "../components/EventList"

export default Home = ({navigation}) => {
    return(
            <EventList/>
    )
}

const styles=StyleSheet.create(
    {
        btn:{
            padding:10,
            width:150,
            color: "black",
            backgroundColor: "black"
        }
    }
);
