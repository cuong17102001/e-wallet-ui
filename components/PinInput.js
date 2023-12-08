import { Button, TextInput, View } from "react-native";

export const PinInput = ()=>{
    const [pin, setPin] = useState('');

    const handlePinChange = (input) => {
        setPin(input);
    };

    const handlePayment = () => {
        // Xử lý thanh toán với mã PIN ở đây
        // Kiểm tra mã PIN và thực hiện thanh toán nếu mã PIN hợp lệ
    };

    return (
        <View>
          <Text>Nhập mã PIN</Text>
          <TextInput
            secureTextEntry
            keyboardType="numeric"
            maxLength={4}
            value={pin}
            onChangeText={handlePinChange}
          />
          <Button title="Thanh toán" onPress={handlePayment} />
        </View>
      );
}