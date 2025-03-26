import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
      }}
    >
      <Text style={{ color: "white" }}>Hello Mom.</Text>
      <Link href="/home" style={{ color: "white", marginTop: 20 }}>
        Home
      </Link>
      <Link href="/about" style={{ color: "white", marginTop: 20 }}>
        About
      </Link>
      <Link href="/products" style={{ color: "white", marginTop: 20 }}>
        Products
      </Link>
    </View>
  );
}
