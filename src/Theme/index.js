import { DefaultTheme } from "@react-navigation/native";

const MyTheme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        primary800:"#194200",
        primary500:"#707769",
        card:"#F6F7EF",
        surface:"#ADB7A8",
        lightsurface:"#EDF2E7",
        darksurface:"#E8E7C7",
        header:"#F6F7E3",
        focus:"#FFC700",
    }
}

export default MyTheme;