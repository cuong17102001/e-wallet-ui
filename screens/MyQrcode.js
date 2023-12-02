import { View } from "react-native"
import QRCode from "react-native-qrcode-svg"

export const MyQrcode = ({ navigation })=>{
    return (
        <View  style={{width: "100%",height :"100%",position : "absolute", zIndex: 10000, alignItems: "center",justifyContent:"center"}}>
            <QRCode
            value="Just some string value"
            logoSize={30}
            logoBackgroundColor='transparent'
            />
        </View>
    )
}