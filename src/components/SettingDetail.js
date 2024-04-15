import React from "react";
import { useState } from "react";
import { HStack } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Switch, Button, Box, View, Pressable, Image, Text, Center, Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetItem, ActionsheetItemText, GluestackUIProvider } from "@gluestack-ui/themed";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useSelector,useDispatch } from "react-redux";
import {selectLogin,logout} from "../redux/accountSlice"

//import { CommonActions } from "@react-navigation/native";
//import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default SettingDetail = () =>{
    const navigation = useNavigation();
    const [showActionsheet, setShowActionsheet] = React.useState(false);

    const dispatch=useDispatch();
    const hasLogin =useSelector(selectLogin);

    const handleClose = () => setShowActionsheet(!showActionsheet);
    const HorizontalLine = () => {
        return (
            <View style={styles.line} />
        );
    };
    const close = () => {
        setShowActionsheet(false);
        dispatch(logout());
    };
    //const {goBack} =useNavigation();
    const {colors} = useTheme();
    const [colorMode, setColorMode] = useState("white");
    const toggleColorMode = () => {
        if(colorMode == "white") setColorMode("black");
        else setColorMode("white");
    };

    return(
            <View>
                <View style={styles.card}>
                    <Pressable>
                        <Image 
                            style={styles.icon} 
                            source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/account_circle_FILL0_wght400_GRAD0_opsz24%201.png?raw=true"}}
                            alt="user"
                        />
                    </Pressable>
                    <View style={styles.info}>
                        <View style={styles.user}>
                            <Text style={styles.text}>User</Text>
                            <View style={styles.stars}>
                                <Pressable>
                                    <Image 
                                        style={styles.star} 
                                        source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/stars-2.png?raw=true"}}
                                        alt="star"
                                    />
                                </Pressable>
                                <Pressable>
                                    <Image 
                                        style={styles.star} 
                                        source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/stars-2.png?raw=true"}}
                                        alt="star"
                                    />
                                </Pressable>
                                <Pressable>
                                    <Image 
                                        style={styles.star} 
                                        source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/stars-2.png?raw=true"}}
                                        alt="star"
                                    />
                                </Pressable>
                                <Pressable>
                                    <Image 
                                        style={styles.star} 
                                        source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/stars-1.png?raw=true"}}
                                        alt="star"
                                    />
                                </Pressable>
                                <Pressable>
                                    <Image 
                                        style={styles.star} 
                                        source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/stars-1.png?raw=true"}}
                                        alt="star"
                                    />
                                </Pressable>
                            </View>
                        </View>
                        <Text style={styles.hash}>#資深登山客 #自行車探險家 #攀岩新手</Text>
                    </View>
                </View>
                <View style={styles.follow}>
                    <View style={styles.block}>
                        <Text style={styles.num}>發佈活動</Text>
                        <Text style={styles.num}>5</Text>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.num}>參加過</Text>
                        <Text style={styles.num}>45</Text>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.num}>徽章</Text>
                        <Text style={styles.num}>3</Text>
                    </View>
                </View>
                
                <View style={styles.btns}>
                    <View style={styles.btnup}>
                        <Box style={styles.btnleft} bg={colors.primary200}>
                            <Pressable>
                                <Image 
                                    style={styles.btniconsave} 
                                    source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/Vector-1.png?raw=true"}}
                                    alt="saved"
                                />
                            </Pressable>
                            <Text style={styles.word}>我的收藏</Text>
                        </Box>
                        <Box style={styles.btnright} bg={colors.primary200}>
                            <Pressable>
                                <Image 
                                    style={styles.btniconlike} 
                                    source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/Vector.png?raw=true"}}
                                    alt="like"
                                />
                            </Pressable>
                            <Text style={styles.wordtwo}>喜歡</Text>
                        </Box>
                    </View>
                    <View style={styles.btndown}>
                        <Box style={styles.btnleft} bg={colors.primary200}>
                            <Pressable>
                                <Image 
                                    style={styles.btnicon} 
                                    source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/edit_square_FILL0_wght400_GRAD0_opsz24%202.png?raw=true"}}
                                    alt="my posts"
                                />
                            </Pressable>
                            <Text style={styles.wordpost}>我的貼文</Text>
                        </Box>
                        <Box style={styles.btnright} bg={colors.primary200}>
                            <Pressable>
                                <Image 
                                    style={styles.btnicon} 
                                    source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/help_FILL0_wght400_GRAD0_opsz24%201.png?raw=true"}}
                                    alt="help"
                                />
                            </Pressable>
                            <Text style={styles.wordtwo}>幫助</Text>
                        </Box>
                    </View>
                </View>
                <Box>
                    <Center>
                        <View>
                            <TouchableOpacity onPress={handleClose}>
                                <Box style={styles.logout} bg={colors.primary800}>
                                    <Text style={styles.logoutword}>Log Out</Text>
                                </Box>
                            </TouchableOpacity>
                        </View>
                    </Center>
                    <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
                        <ActionsheetBackdrop />
                        <ActionsheetContent h="$72" zIndex={999}>
                            <Text style={styles.sure}>確定登出?</Text>
                            <HorizontalLine />
                            <Center>
                                <ActionsheetItem onPress={close}>
                                    <Center>
                                        <ActionsheetItemText style={styles.item}><Text style={styles.yes}>Yes</Text></ActionsheetItemText>
                                    </Center>
                                </ActionsheetItem>
                            </Center>
                            <HorizontalLine />
                            <Center>
                                <ActionsheetItem onPress={handleClose}>
                                    <Center>
                                        <ActionsheetItemText style={styles.item}><Text style={styles.cancel}>Cancel</Text></ActionsheetItemText>
                                    </Center>
                                </ActionsheetItem>
                            </Center>
                        </ActionsheetContent>
                    </Actionsheet>
                </Box>
            </View>

    )
}

const styles=StyleSheet.create(
    {
        item: {
            alignSelf: "center"
        },
        line: {
            width: "100%",
            height: 2,
            backgroundColor: "#D3D3D3",
            marginTop: 10,
            marginBottom: 10
        },
        sure: {
            fontSize: 20,
            color: "red",
            paddingVertical: 20
        },
        yes: {
            fontSize: 20,
            color: "black",
            paddingVertical: 20,
            textAlign: "center"
        },
        cancel: {
            fontSize: 20,
            color: "blue",
            paddingVertical: 20,
            alignSelf:"center"
        },
        logout: {
            marginTop: 60,
            justifyContent: "center",
            //backgroundColor: "orange",
            borderRadius: 20,
            width: 180,
            paddingVertical: 15
        },
        logoutword: {
            fontSize: 20,
            //paddingTop: 0,
            //paddingBottom: 20,
            //justifyContent: "center",
            //alignItems: "center",
            textAlign: "center",
            color: 'white'
        },
        word: {
            marginLeft: 15,
            marginRight: 8,
            fontSize: 16
        },
        wordtwo: {
            marginLeft: 25,
            marginRight: 8,
            fontSize: 16
        },
        wordpost: {
            marginLeft: 8,
            marginRight: 8,
            fontSize: 16
        },
        btns:{
            flexDirection: "column",
            justifyContent: "center",
            marginTop: 40
        },
        btnup: {
            flexDirection: "row",
            justifyContent: "space-around"
        },
        btndown: {
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 12
        },
        btnleft: {
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            //backgroundColor: "pink",
            paddingHorizontal: 15,
            paddingVertical: 10,
            height: 60,
            width: 160,
            borderRadius: 12,
            marginHorizontal: 5
        },
        btnright: {
            flexDirection: "row",
            //backgroundColor: "pink",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 10,
            height: 60,
            width: 160,
            borderRadius: 12,
            marginHorizontal: 5
        },
        btnicon: {
            height: 40,
            width: 40
        },
        btniconsave: {
            height: 40,
            width: 30
        },
        btniconlike: {
            height: 37,
            width: 40
        },
        mode: {
            backgroundColor: "gray",
            fontSize: 30,
            marginTop: 40,
            paddingVertical: 10,
            paddingLeft: 20
        },
        follow: {
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 50,
            marginBottom: 20
        },
        block: {
            flexDirection: "column",
            justifyContent: "center"
        },
        num: {
            fontSize: 16,
            justifyContent: "center"
        },
        text: {
            fontSize: 25,
        },
        card: {
            marginTop: 40,
            flexDirection: "row",
            alignItems: "center",
        },
        icon: {
            height: 50,
            width: 50
        },
        star:{
            height: 25,
            width: 25,
            marginRight: 2
        },
        stars: {
            flexDirection: "row",
            marginLeft: 15
        },
        info:{
            flexDirection: "column",
            marginLeft: 15
        },
        user: {
            flexDirection: "row",
            alignItems: "center"
        },
        hash: {
            fontSize: 12,
            color: "gray"
        }
    }
);


