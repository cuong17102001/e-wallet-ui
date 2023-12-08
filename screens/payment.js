import { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Camera } from 'expo-camera'
import { COLORS, FONTS, SIZES, icons, images } from "../constants";
import axios from "axios";
import {env} from "../env.json"
import { useStore } from "../store";
export const payment = ({ route , navigation })=>{
    const { barcodeData } = route.params;
    const [userInfor , setUserInfor] = useState();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [sotien , setSotien] = useState("")
    const users = useStore((state) => state.users)
    const setUsers = useStore((state) => state.setUsers)

    useEffect(()=>{
        if(barcodeData != users._id){
            axios.get(env.API_URL+`/user/${barcodeData}`)
            .then(function (response) {
                setUserInfor(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        }else{
            navigation.goBack();
        }
    },[])

    const handlepayment = ()=>{
        axios.post(env.API_URL+`/user/chuyentien`,{
            sendId : users._id,
            reciverId : barcodeData,
            sotien : sotien
        })
            .then(function (response) {

                let user = users
                user.money = user.money - sotien

                setUsers(user)
                setSotien('')

                
                navigation.navigate("Success", { data: response.data })
            })
            .catch(function (error) {
                navigation.goBack();
            });
    }
    return (
    <View style={{
            width : windowWidth,
            height : windowHeight,
            position : "relative"
        }}>
            
            <View style={{
                width : windowWidth,
                height : 100,
                backgroundColor : COLORS.green,
                display : "flex",
                justifyContent : "center",
                alignItems : "center",
                paddingTop : 15
            }}>
                
                <Text style ={{color : COLORS.white, fontWeight:700}}>Thanh toán</Text>
            </View>
            <TouchableOpacity style={{
                    padding : 20,
                    position: "absolute",
                    top: 30
                }} onPress={() => navigation.goBack()}>
                    <Image source={icons.back}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.white
                    }} />
            </TouchableOpacity>

            <View style={{
                justifyContent : "center",
                alignItems : "center",
                marginTop : 15,
            }}>
                <ScrollView style={{
                    width : windowWidth * 95 / 100,
                }}>
                    <View style={{
                        backgroundColor : COLORS.white,
                        padding : 10,
                        borderRadius : 15
                    }}>
                        <Text>Chuyển tiền cho</Text>
                        <View style={{
                            borderColor : COLORS.primary,
                            borderWidth : 1,
                            borderRadius : 10,
                            padding : 10,
                        }}>
                            <Text>Người nhận</Text>
                            <Text style={{fontWeight:800}}>{userInfor ? userInfor.fullname : ""}</Text>
                        </View>

                        <View style={{
                            borderColor : COLORS.gray,
                            borderWidth : 1,
                            borderRadius : 10,
                            padding : 10,
                            marginTop : 10
                        }}>
                            <Text>Tài khoản</Text>
                            <Text style={{fontWeight:800}}>{userInfor ? userInfor._id : ""}</Text>
                        </View>

                        <View style={{
                            borderColor :sotien > users.money ? COLORS.red : COLORS.gray,
                            marginTop: 15,
                            borderRadius : 10,
                            borderWidth : 1,
                            padding : 10,
                            position : "relative"
                        }}>
                            <Text style={{
                                position : "absolute",
                                zIndex : 1000,
                                backgroundColor : COLORS.white,
                                color :sotien > users.money ? COLORS.red : COLORS.darkgray,
                                top : -10,
                                left : 10
                            }}>
                                Số tiền cần chuyển
                            </Text>
                            <TextInput value={sotien} onChangeText={setSotien} keyboardType = 'numeric'  placeholder="$0"  style={{
                                height : 30
                            }}/>
                        </View>
                        {sotien > users.money ? <Text style={{color : COLORS.red}}>Số dư không đủ</Text> : <></>}
                    </View>
                    <Text style={{
                        padding : 15,
                        fontWeight : 800
                    }}>
                        Từ nguồn tiền
                    </Text>
                    <View style={{
                        backgroundColor : COLORS.white,
                        padding : 10,
                        borderRadius : 15,

                    }}>
                        <View style={{
                            flexDirection : "row",
                            borderColor : COLORS.primary,
                            borderWidth : 1,
                            padding : 10,
                            borderRadius : 10,
                            marginBottom : 10
                        }}>
                            <Image source={icons.wallet} style={{
                                width : 30,
                                height : 30,
                            }}></Image>
                            <View style={{
                                marginLeft : 10
                            }}>
                                <Text style={{fontWeight:800}}>Ví cá nhân</Text>
                                <Text>{ users ? "$"+users.money :""}</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection : "row",
                            borderColor : COLORS.darkgray,
                            borderWidth : 1,
                            padding : 10,
                            borderRadius : 10,
                        }}>
                            <Image source={icons.VietinBank} style={{
                                width : 30,
                                height : 30
                            }}></Image>
                            <View style={{
                                marginLeft : 10
                            }}>
                                <Text style={{fontWeight:800}}>VietinBank</Text>
                                <Text>Hiện chưa dùng được</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView> 
            </View>

            
            <View style={{
                position : "absolute",
                width : windowWidth,
                height : 90,
                backgroundColor : COLORS.lightpurple,
                bottom : 0,
                justifyContent: "center",
                alignItems:"center"
            }}>
                <TouchableOpacity style={{
                    backgroundColor: COLORS.green,
                    width: "95%",
                    height: "70%",
                    borderRadius : 15,
                    justifyContent:"center",
                    alignItems:"center"
                }} onPress={handlepayment}>
                    <Text style={{fontSize:30 , fontWeight :700, color : COLORS.white}}>Thanh Toán</Text>
                </TouchableOpacity>
            </View>
        </View>

        
    )
}