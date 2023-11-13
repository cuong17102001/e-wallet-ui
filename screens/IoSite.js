import { Text, View , Dimensions , TouchableOpacity, Image, Button} from "react-native"
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useState } from "react";

export const IoSite = ({ navigation })=>{
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [inOutput , setInOutput] = useState(true)

    const renderInput = ()=>{
        return (
            <View>
                <Text>
                    Input
                </Text>
            </View>
        )
    }

    const renderOut = ()=>{
        return (
            <View>
                <Text>
                    output
                </Text>
            </View>
        )
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
                backgroundColor : COLORS.purple,
                display : "flex",
                justifyContent : "center",
                alignItems : "center",
                paddingTop : 15
            }}>
                
                <Text style ={{color : COLORS.white, fontWeight:700}}>Input/Output</Text>
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
                            backgroundColor : COLORS.purple,
                            marginRight : 3,
                            borderRadius : 4
                        }}></Image>
                        <Text style={{color : COLORS.purple}}>Input</Text>
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
                            backgroundColor : COLORS.purple,
                            marginRight : 3,
                            borderRadius : 4
                        }}></Image>
                        <Text style={{color : COLORS.purple}}>Ouput</Text>
                    </TouchableOpacity>
                </View>
            </View>


            {inOutput ? renderInput() : renderOut()}

            
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
                    backgroundColor: COLORS.purple,
                    width: "95%",
                    height: "70%",
                    borderRadius : 30,
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <Text style={{fontSize:30 , fontWeight :700, color : COLORS.white}}>{inOutput ? "Input" : "Output"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )


    
}