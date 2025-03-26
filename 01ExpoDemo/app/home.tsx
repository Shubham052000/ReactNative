import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
});
