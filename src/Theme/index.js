import { DefaultTheme } from "@react-navigation/native";

const MyTheme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        primary800:"#194200",
        primary500:"#707769",
        card:"#F6F7EF",
        surface:"#ADB7A8",
        focus:"#FFC700"
    }
}

export default MyTheme;