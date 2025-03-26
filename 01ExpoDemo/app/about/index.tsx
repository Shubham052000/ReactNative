import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>About</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});
