import React from "react";
import { FlatList } from "@gluestack-ui/themed";

import EventItem from "./EventItem";

import Events from "../json/Events.json"

export default EventList = () =>{
    const renderItem=({item})=><EventItem event={item}/>;

    return(
        <FlatList
        data={Events}
        renderItem={renderItem}
        keyExtractor={(item,index)=>index+item}
        />
    )
}