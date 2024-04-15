import React from "react";
import { Heading,AlertCircleIcon,VStack,Text, FormControl, FormControlLabel, FormControlLabelText, Input, InputField, ScrollView, FormControlError, FormControlErrorText, FormControlErrorIcon, Center, Button, ButtonText } from "@gluestack-ui/themed"
import { useState,useEffect } from "react";
//
import {  useSelector,useDispatch} from "react-redux"
import { selectGeneral, selectLogin } from "../redux/accountSlice";
import { setGeneralAccount,login } from "../redux/accountSlice";

 const LoginScreen=()=>{
    const general=useSelector(selectGeneral);
    const dispatch=useDispatch();
    const hasLogin =useSelector(selectLogin);

    const [name,setName]=useState(general.name);
    const [email,setEmail]=useState(general.email);
    const [address,setAddress]=useState(general.adrs);
    const [tel,setTel]=useState(general.tel);
    const [nameIsError, setNameIsError] = useState(true);
    const [emailIsError, setEmailIsError] = useState(true);

    const nameRegex=/^[a-zA-Z]+\w*$/;
    const emailRegex=/\w{3,}@[a-zA_Z_]+\.[a-zA_Z]{2,5}/

    useEffect(()=>{
        if(!nameIsError && !emailIsError)
        dispatch(setGeneralAccount({name,email,address,tel}))
        if (nameRegex.test(name)) setNameIsError(false);
        else setNameIsError(true);
        if (emailRegex.test(email)) setEmailIsError(false);
        else setEmailIsError(true);
    },[name,email,address,tel])

    console.log({ name, nameIsError });

    return(
        <ScrollView>
            <Center mt={50}>
            <Heading size="lg" fontWeight="600" color="darkgray">Welcome</Heading>
            <Heading mt="1" fontWeight="medium" size="xs">
               Sign in to continue!
            </Heading>
            </Center>
        <VStack space={2} mt={5} width="80%" alignSelf="center">
            <FormControl mb={5} isRequired>
                <FormControlLabel>
                    <FormControlLabelText>Name</FormControlLabelText>
                </FormControlLabel>
                <Input variant="underlined">
                    <InputField 
                    placeholder="input your name"
                    value={name}
                    onChangeText={(name)=>{
                        setName(name)
                    }}
                    />
                </Input>
                <FormControlError isInvalid={nameIsError}>
                    <FormControlErrorIcon as={AlertCircleIcon}/> 
                    <FormControlErrorText>You are wrong!</FormControlErrorText>
                </FormControlError>
            </FormControl>
            <FormControl mb={5} isRequired>
                <FormControlLabel>
                    <FormControlLabelText>Email</FormControlLabelText>
                </FormControlLabel>
                <Input variant="underlined">
                    <InputField 
                    placeholder="input your email"
                    value={email}
                    onChangeText={(email)=>{setEmail(email)
                    }}
                    />
                </Input>
                <FormControlError isInvalid={emailIsError}>
                    <FormControlErrorIcon as={AlertCircleIcon}/> 
                    <FormControlErrorText>You are wrong!</FormControlErrorText>
                </FormControlError>
            </FormControl>
            <FormControl mb={5}>
                <FormControlLabel>
                    <FormControlLabelText>Address</FormControlLabelText>
                </FormControlLabel>
                <Input variant="underlined">
                    <InputField 
                    placeholder="input your address"
                    value={address}
                    onChangeText={(address)=>{
                        setAddress(address)
                    }}
                    />
                </Input>
            </FormControl>
            <FormControl  mb={5}>
                <FormControlLabel>
                    <FormControlLabelText>Tel</FormControlLabelText>
                </FormControlLabel>
                <Input variant="underlined">
                    <InputField 
                    placeholder="input your tel"
                    value={tel}
                    onChangeText={(tel)=>setTel(tel)}
                    />
                </Input>
            </FormControl>
            <Button onPress={()=>{dispatch(login())
            console.log(hasLogin)}}>
                <ButtonText>Sign in</ButtonText>
            </Button>
        </VStack>
        </ScrollView>
    )
}

export default LoginScreen;