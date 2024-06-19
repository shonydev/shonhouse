import React, { useEffect } from "react";
import { View, Button } from "react-native";
import { ListComponents } from "../components/ListComponents";

export const ListScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "Usuarios",
      headerTitleAlign: "center",
    });
  });
  return (
    <View style={{ flex: 1 }}>
      <ListComponents />
      <Button title="Home" onPress={() => navigation.navigate("HomeScreen")} />
    </View>
  );
};
