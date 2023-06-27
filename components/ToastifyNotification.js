import { View } from "react-native";
import Container from "toastify-react-native";

const ToastifyNotification = () => {
  return (
    <View className="z-50">
      <Container position="top" duration={5000} width={300} />
    </View>
  );
};

export default ToastifyNotification;
