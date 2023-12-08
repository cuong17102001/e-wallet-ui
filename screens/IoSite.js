import { Text, View , Dimensions , TouchableOpacity, Image, Button, ScrollView, TextInput} from "react-native"
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useState } from "react";
import { useStore } from "../store";
import axios from "axios";
import {env} from "../env.json"

export const IoSite = ({ navigation })=>{
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const users = useStore((state) => state.users)

    const [inOutput , setInOutput] = useState(true)
    
    const [rutTien, onChangeRutTien] = useState("")
    const [napTien, onChangeNapTien] = useState("")

    const setUsers = useStore((state) => state.setUsers)

    const renderInput = ()=>{
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
                        <Text style={{fontWeight:800}}>${users.money.toLocaleString()}</Text>
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
                        <TextInput value={napTien} onChangeText={onChangeNapTien} keyboardType = 'numeric' placeholder="$0"  style={{
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

    const renderOutput = ()=>{
        return (
            <ScrollView style={{
                width : windowWidth * 95 / 100,
            }}>
                <View style={{
                    backgroundColor : COLORS.white,
                    padding : 10,
                    borderRadius : 15
                }}>
                    <Text>Rút tiền từ ví</Text>
                    <View style={{
                        borderColor : COLORS.primary,
                        borderWidth : 1,
                        borderRadius : 10,
                        padding : 10,
                    }}>
                        <Text>Ví</Text>
                        <Text style={{fontWeight:800}}>${users.money.toLocaleString()}</Text>
                    </View>
                    
                    <View style={{
                        borderColor :rutTien > users.money ? COLORS.red : COLORS.gray,
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
                            color :rutTien > users.money ?COLORS.red : COLORS.darkgray,
                            top : -10,
                            left : 10
                        }}>
                            Số tiền cần rút
                        </Text>
                        <TextInput 
                        keyboardType = 'numeric'
                            onChangeText={onChangeRutTien}
                            value={rutTien} 
                            placeholder="$0"  
                            style={{
                                height : 30
                            }
                        }/>
                    </View>
                    {rutTien > users.money ? <Text style={{color : COLORS.red}}>Số dư không đủ</Text> : <></>}
                </View>
                <Text style={{
                    padding : 15,
                    fontWeight : 800
                }}>
                    Rút tiền về
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


    const submitTien = (url) => {
        console.log(env.API_URL+`/user/${users._id}/${url}`);
        axios.post(env.API_URL+`/user/${users._id}/${url}`, {
            sotien : inOutput ? parseFloat( napTien) : parseFloat(rutTien)
            })
            .then(function (response) {
                setUsers(response.data)

                onChangeNapTien("")
                onChangeRutTien("")
            })
            .catch(function (error) {
                console.log(error);
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
                
                <Text style ={{color : COLORS.white, fontWeight:700}}>Nạp/Rút</Text>
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
                width : windowWidth,
                height : 60,
                backgroundColor : COLORS.white,
                flexDirection : "row"
            }}>
                <View style={{
                    width:"50%",
                    height:"100%",
                    borderBottomColor: COLORS.purple,
                    borderBottomWidth : inOutput ? 2 : 0,
                }}>
                    <TouchableOpacity onPress={()=> setInOutput(true)} style={{
                        width:"100%",
                        height:"100%",
                        justifyContent: "center",
                        alignItems:"center",
                        flexDirection:"row"
                    }}>
                        <Image source={icons.ioIcon} style={{
                            width : 20,
                            height : 20,
                            tintColor: COLORS.white,
                            backgroundColor : COLORS.red,
                            marginRight : 3,
                            borderRadius : 4
                        }}></Image>
                        <Text style={{color : COLORS.red}}>Nạp</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    width:"50%",
                    height:"100%",
                    borderBottomColor: COLORS.purple,
                    borderBottomWidth : !inOutput ? 2 : 0,
                    
                }}>
                    <TouchableOpacity onPress={()=> setInOutput(false)} style={{
                        width:"100%",
                        height:"100%",
                        justifyContent: "center",
                        alignItems:"center",
                        flexDirection:"row",
                    }}>
                        <Image source={icons.Ouput} style={{
                            width : 20,
                            height : 20,
                            tintColor: COLORS.white,
                            backgroundColor : COLORS.yellow,
                            marginRight : 3,
                            borderRadius : 4
                        }}></Image>
                        <Text style={{color : COLORS.yellow}}>Rút</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={{
                justifyContent : "center",
                alignItems : "center",
                marginTop : 15,
            }}>
                {inOutput ? renderInput() : renderOutput()}    
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
                }}
                onPress={() =>inOutput ? submitTien("naptien") : submitTien("ruttien")}>
                    <Text style={{fontSize:30 , fontWeight :700, color : COLORS.white}}>{inOutput ? "Nạp" : "Rút"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    
}