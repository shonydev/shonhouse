import React from "react";
import { View, Button } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Text>Home Screen</Text> */}
      <Button title="lista" onPress={() => navigation.navigate("ListScreen")} />
    </View>
  );
};
