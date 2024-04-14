import React from "react";
import { StyleSheet } from "react-native";
import { View, Pressable, Image, Text } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

export default SettingDetail = () =>{
    const navigation = useNavigation();

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
            </View>

    )
}

const styles=StyleSheet.create(
    {
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


