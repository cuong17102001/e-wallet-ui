import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, View , Button } from "react-native"
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { useState } from "react";

export const InputComponent = ({ navigation })=>{
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <ScrollView style={{
            width : windowWidth * 95 / 100,
        }}>
            <View style={{
                backgroundColor : COLORS.white,
                padding : 10,
                borderRadius : 15
            }}>
                <Text>Nạp tiền vào ví</Text>
                <View style={{
                    borderColor : COLORS.primary,
                    borderWidth : 1,
                    borderRadius : 10,
                    padding : 10,
                }}>
                    <Text>Ví</Text>
                    <Text style={{fontWeight:800}}>$100.000</Text>
                </View>
                <View style={{
                    borderColor : COLORS.gray,
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
                        color : COLORS.darkgray,
                        top : -10,
                        left : 10
                    }}>
                        Số tiền cần nạp
                    </Text>
                    <TextInput placeholder="$0"  style={{
                        height : 30
                    }}/>
                </View>
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
                    <Image source={icons.Bank} style={{
                        width : 30,
                        height : 30
                    }}></Image>
                    <View style={{
                        marginLeft : 10
                    }}>
                        <Text style={{fontWeight:800}}>Ngân hàng ảo</Text>
                        <Text>Miễn phí hoàn toàn</Text>
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

            <View style={{
                backgroundColor : COLORS.white,
                padding : 10,
                borderRadius : 15,
                marginTop : 15
            }}>
                <View style={{
                    flexDirection : "row",
                    borderColor : COLORS.darkgray,
                    borderWidth : 1,
                    padding : 10,
                    borderRadius : 10,
                    
                }}>
                    <Image source={icons.Bank} style={{
                        width : 30,
                        height : 30
                    }}></Image>
                    <View style={{
                        marginLeft : 10
                    }}>
                        <Text style={{fontWeight:800}}>Thêm liên kết với ngân hàng</Text>
                        <Text>Hiện chưa dùng được</Text>
                    </View>
                </View>
            </View>
            <Text style={{
                padding : 15,
                fontWeight : 800
            }}>
                Tiện ích
            </Text>
            <View style={{
                backgroundColor : COLORS.white,
                padding : 10,
                borderRadius : 15,
                height : 200
            }}>

            </View>
        </ScrollView>
    )
}
