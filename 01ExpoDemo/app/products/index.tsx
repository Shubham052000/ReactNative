import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Products() {
  return (
    <View style={styles.container}>
      <Link href="products/1" style={{ color: "white", marginTop: 20 }}>
        Product 1
      </Link>
      <Link href="products/2" style={{ color: "white", marginTop: 20 }}>
        Product 2
      </Link>
      <Link href="products/3" style={{ color: "white", marginTop: 20 }}>
        Product 3
      </Link>
      <Link href="products/4" style={{ color: "white", marginTop: 20 }}>
        Product 4
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
});
