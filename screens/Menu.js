import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useStore } from "../store";
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { useNavigation } from '@react-navigation/native';

export const Menu = ()=>{
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const setUsers = useStore((state) => state.setUsers)
    const users = useStore((state) => state.users)
    return (
        <ScrollView style={{
           width : windowWidth,
           height : windowHeight,
        }}>
            <View style={{
                width : "100%",
                justifyContent : "center",
                alignItems : "center",
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
                    
                    <Text style ={{color : COLORS.white, fontWeight:700}}>Menu</Text>
                </View>
                <View style={{
                    padding : 10,
                    width : "95%",
                    backgroundColor : COLORS.white,
                    position : "absolute",
                    zIndex : 100,
                    borderRadius : 15,
                    top : 75,
                    shadowColor: '#171717',
                    shadowOffset: {width: -2, height: 4},
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    flexDirection : "row",
                    alignItems : "center"
                }}>
                    <Image source={images.defaultAvatar} style={{
                        width : 50,
                        height : 50
                    }}></Image>
                    <View style={{
                        marginLeft : 10
                    }}>
                        <Text style={{fontWeight:800}}>{users.fullname}</Text>
                        <Text>{users.username}</Text>
                    </View>
                </View>

                <View style={{
                    height : 70,
                    width : "95%",
                    backgroundColor : COLORS.white,
                    borderRadius : 15,
                    marginTop : 35
                }}>

                </View>

                <TouchableOpacity style={{
                    marginTop: 100
                }} onPress={() => setUsers(null)}>
                    <Text>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}