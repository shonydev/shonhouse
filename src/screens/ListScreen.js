import React, { useEffect, useContext } from "react";
import { View, Button } from "react-native";
import { ListComponents } from "../components/ListComponents";
import { AppContext } from "../context/AppContext";

export const ListScreen = ({ navigation }) => {
  const { globalState, setGlobalState } = useContext(AppContext);
  useEffect(() => {
    navigation.setOptions({
      title: "Usuarios",
      headerTitleAlign: "center",
    });
  });
  return (
    <View style={{ flex: 1 }}>
      <ListComponents />
      {/* <Button title="Home" onPress={() => navigation.navigate("HomeScreen")} />
      <Button title="dd" onPress={() => navigation.navigate("RandomScreen")} /> */}
    </View>
  );
};
