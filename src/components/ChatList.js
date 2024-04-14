import React from "react";
import { FlatList } from "@gluestack-ui/themed";

import ChatItem from "./ChatItem";

import Chat from "../json/Chat.json"

export default ChatList = () =>{
    const renderItem=({item})=><ChatItem chat={item}/>;

    return(
        <FlatList
        data={Chat}
        renderItem={renderItem}
        keyExtractor={(item,index)=>index+item}
        />
    )
}