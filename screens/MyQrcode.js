import { View } from "react-native"
import QRCode from "react-native-qrcode-svg"
import { useStore } from "../store"

export const MyQrcode = ({ navigation })=>{
    const users = useStore((state) => state.users)

    return (
        <View  style={{width: "100%",height :"100%",position : "absolute", zIndex: 10000, alignItems: "center",justifyContent:"center"}}>
            <QRCode
            value={users._id}
            logoSize={30}
            logoBackgroundColor='transparent'
            />
        </View>
    )
}