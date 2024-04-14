import React from "react";
import { StyleSheet } from "react-native";
import { Box, View, Pressable, Image, Text, Center, Actionsheet, ActionsheetBackdrop, ActionsheetContent } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default SettingDetail = () =>{
    const navigation = useNavigation();
    const [showActionsheet, setShowActionsheet] = React.useState(false);
    const handleClose = () => setShowActionsheet(!showActionsheet);
    const HorizontalLine = () => {
        return (
            <View style={styles.line} />
        );
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
                        <Text style={styles.num}>5</Text>
                        <Text style={styles.num}>發佈活動</Text>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.num}>45</Text>
                        <Text style={styles.num}>參加過</Text>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.num}>3</Text>
                        <Text style={styles.num}>徽章</Text>
                    </View>
                </View>
                <View style={styles.mode}>
                    <Text>Light Mode</Text>
                </View>
                <View style={styles.btns}>
                    <View style={styles.btnup}>
                        <View style={styles.btnleft}>
                            <Pressable>
                                <Image 
                                    style={styles.btniconsave} 
                                    source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/Vector-1.png?raw=true"}}
                                    alt="saved"
                                />
                            </Pressable>
                            <Text style={styles.word}>我的收藏</Text>
                        </View>
                        <View style={styles.btnright}>
                            <Pressable>
                                <Image 
                                    style={styles.btniconlike} 
                                    source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/Vector.png?raw=true"}}
                                    alt="like"
                                />
                            </Pressable>
                            <Text style={styles.word}>喜歡</Text>
                        </View>
                    </View>
                    <View style={styles.btndown}>
                        <View style={styles.btnleft}>
                            <Pressable>
                                <Image 
                                    style={styles.btnicon} 
                                    source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/edit_square_FILL0_wght400_GRAD0_opsz24%202.png?raw=true"}}
                                    alt="my posts"
                                />
                            </Pressable>
                            <Text style={styles.wordpost}>我的貼文</Text>
                        </View>
                        <View style={styles.btnright}>
                            <Pressable>
                                <Image 
                                    style={styles.btnicon} 
                                    source={{uri: "https://github.com/jes109/App_midterm/blob/master/src/img/help_FILL0_wght400_GRAD0_opsz24%201.png?raw=true"}}
                                    alt="help"
                                />
                            </Pressable>
                            <Text style={styles.word}>幫助</Text>
                        </View>
                    </View>
                </View>
                <Center>
                    <View style={styles.logout}>
                        <Center>
                            <Text style={styles.logoutword}>Log Out</Text>
                        </Center>
                    </View>
                </Center>
                <Box>
                    <MaterialCommunityIcons 
                        name={"logout"}
                        size={40}
                        onPress={handleClose}
                    />
                    <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
                        <ActionsheetBackdrop />
                        <ActionsheetContent h="$72" zIndex={999}>
                            <Text style={styles.sure}>確定登出?</Text>
                            <HorizontalLine />
                            <Text style={styles.yes}>Yes</Text>
                            <HorizontalLine />
                            <Text style={styles.cancel}>Cancel</Text>
                        </ActionsheetContent>
                    </Actionsheet>
                </Box>
            </View>

    )
}

const styles=StyleSheet.create(
    {
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
            paddingVertical: 20
        },
        cancel: {
            fontSize: 20,
            color: "blue",
            paddingVertical: 20
        },
        logout: {
            marginTop: 40,
            justifyContent: "center",
            backgroundColor: "orange",
            borderRadius: 20,
            width: 180
        },
        logoutword: {
            fontSize: 20,
            paddingVertical: 15,
            justifyContent: "center",
        },
        word: {
            marginLeft: 15,
            marginRight: 8,
            fontSize: 18
        },
        wordpost: {
            marginLeft: 8,
            marginRight: 8,
            fontSize: 18
        },
        btns:{
            flexDirection: "column",
            justifyContent: "center",
            marginTop: 30
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
            backgroundColor: "pink",
            paddingHorizontal: 15,
            paddingVertical: 10,
            height: 60,
            width: 150,
            borderRadius: 12,
        },
        btnright: {
            flexDirection: "row",
            backgroundColor: "pink",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 10,
            height: 60,
            width: 150,
            borderRadius: 12,
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
            marginTop: 30
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
            fontSize: 30,
        },
        card: {
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center"
        },
        icon: {
            height: 60,
            width: 60
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
            fontSize: 14,
            color: "gray"
        }
    }
);


