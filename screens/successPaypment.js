import { Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { COLORS, FONTS, SIZES, icons, images } from "../constants";
import {env} from "../env.json"
import { useStore } from "../store";
import { Image } from "react-native";
import { useRoute } from '@react-navigation/native';

export const successPaypment = ({navigation})=>{
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const route = useRoute();
    const receivedData = route.params?.data || {};

    const date = new Date(receivedData.time)


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
                
                <Text style ={{color : COLORS.white, fontWeight:700}}>Kết quả giao dịch</Text>
            </View>

            <View style={{
                justifyContent : "center",
                alignItems : "center",
                marginTop : 70,
                position : "relative"
            }}>
                <Image
                        source={icons.success}
                        style={{
                            width : 90,
                            height : 90,
                            top : -45,
                            position : "absolute",
                            zIndex: 10000,
                            backgroundColor : COLORS.white,
                            borderRadius : 50
                        }}
                    ></Image>
                <View style={{
                    width : windowWidth * 95 / 100,
                    backgroundColor : COLORS.white,
                    borderRadius : 15,
                    height : 500,
                    alignItems : "center"
                }}>
                    <Text
                    style={{
                        marginTop : 60,
                        fontWeight : 800,
                        fontSize : 25
                    }}
                    >Giao dịch thành công</Text>
                    <Text
                    style={{
                        marginTop : 20,
                        fontWeight : 800,
                        fontSize : 25,
                        marginBottom : 15
                    }}
                    >${receivedData.sotiengiaodich}</Text>

                    <View style={{
                        flexDirection : "row",
                        justifyContent : "space-between",
                        width : windowWidth * 85 / 100
                    }}>
                        <Text style={{fontSize : 20}}>Thời gian giao dịch:</Text>
                        <Text>{date.toLocaleDateString('en-US')}</Text>
                    </View>

                    <View style={{
                        flexDirection : "row",
                        justifyContent : "space-between",
                        width : windowWidth * 85 / 100,
                        marginTop : 30
                    }}>
                        <Text style={{fontSize : 20}}>Người giao dịch:</Text>
                        <Text>{receivedData.senderFullname}</Text>
                    </View>

                    <View style={{
                        flexDirection : "row",
                        justifyContent : "space-between",
                        width : windowWidth * 85 / 100,
                        marginTop : 30
                    }}>
                        <Text style={{fontSize : 20}}>Dịch vụ</Text>
                        <Text>{receivedData.service}</Text>
                    </View>

                    <View style={{
                        flexDirection : "row",
                        justifyContent : "space-between",
                        width : windowWidth * 85 / 100,
                        marginTop : 30
                    }}>
                        <Text style={{fontSize : 20}}>Người giao dịch:</Text>
                        <Text>{receivedData.reciverFullname}</Text>
                    </View>
                </View>
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
                }} onPress={()=> navigation.navigate("HomeTabs" , {screen: 'Home'})}>
                    <Text style={{fontSize:30 , fontWeight :700, color : COLORS.white}}>Quay về trang chủ</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}