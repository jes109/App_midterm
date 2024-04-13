import { DefaultTheme } from "@react-navigation/native";

const MyTheme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        primary800:"#194200",
        primary500:"#97A888",
        card:"#F6F7EF",
        surface:"#ADB7A8"
    }
}

export default MyTheme;