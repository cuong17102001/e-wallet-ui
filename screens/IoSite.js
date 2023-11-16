import { Text, View , Dimensions , TouchableOpacity, Image, Button, ScrollView} from "react-native"
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useState } from "react";
import { InputComponent } from "../components/InputComponent";
import { OutComponent } from "../components/OutComponent";

export const IoSite = ({ navigation })=>{
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [inOutput , setInOutput] = useState(true)

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
                {inOutput ? <InputComponent/> : <OutComponent/>}    
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
                }}>
                    <Text style={{fontSize:30 , fontWeight :700, color : COLORS.white}}>{inOutput ? "Nạp" : "Rút"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )


    
}