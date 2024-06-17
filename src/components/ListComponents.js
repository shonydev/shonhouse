import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ListUsers } from "./ListUsers";

export const ListComponents = () => {
  return (
    <ListUsers />
    // <View style={styles.container}>
    //   <Text>shon</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
