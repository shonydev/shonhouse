import React, { useEffect } from "react";
import { Text, View } from "react-native";

export const HistoryScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
    });
  });
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Historial</Text>
      {/* <Button title="lista" onPress={() => navigation.navigate("ListScreen")} /> */}
    </View>
  );
};
