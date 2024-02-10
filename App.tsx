import { StatusBar } from "expo-status-bar";
import { Dimensions, View } from "react-native";
import WebView from "react-native-webview";

const DEVICE_HEIGHT = Dimensions.get("window").height;
const DEVICE_WIDTH = Dimensions.get("window").width;

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <WebView
        source={{ uri: "https://google.com" }}
        style={{ width: DEVICE_WIDTH, height: DEVICE_HEIGHT }}
      />
    </View>
  );
}
