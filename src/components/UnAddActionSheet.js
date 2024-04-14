import React from "react";
import { useState } from "react";
import {Text, Actionsheet,ActionsheetBackdrop,ActionsheetContent, Box ,ActionsheetDragIndicatorWrapper,ActionsheetItem,ActionsheetItemText,ActionsheetDragIndicator} from "@gluestack-ui/themed";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation, useTheme } from "@react-navigation/native";

export default unAddActionSheet=()=>{
    const [showActionSheet,setshowActionSheet]=useState(false);
    const handleClose=()=>setshowActionSheet(!showActionSheet);
    const {colors}=useTheme();
    const {goBack} =useNavigation();

    return(
        <Box pl={12}>
          <AntDesign
          name="left"
          size={25}
          color={colors.primary800}
          onPress={handleClose}
          />

          <Actionsheet isOpen={showActionSheet} onClose={handleClose} zIndex={999}>
            <ActionsheetBackdrop/>
            <ActionsheetContent>
                <ActionsheetDragIndicatorWrapper>
                    <ActionsheetDragIndicator />
                </ActionsheetDragIndicatorWrapper>
                <Text py={20}>確定要離開嗎?</Text>
                <ActionsheetItem onPress={handleClose}>
                    <ActionsheetItemText>繼續編輯</ActionsheetItemText>
                </ActionsheetItem>
                <ActionsheetItem onPress={()=>goBack()}>
                    <ActionsheetItemText color="red" >離開</ActionsheetItemText>
                </ActionsheetItem>
            </ActionsheetContent>
        </Actionsheet>
    </Box>
    )
}