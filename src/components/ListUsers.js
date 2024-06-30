import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "./Card";
import { AppContext } from "../context/AppContext";

export const ListUsers = () => {
  // const [users, setUsers] = useState([]);
  const { globalState, setGlobalState } = useContext(AppContext);

  useEffect(() => {
    fetch("http://192.168.0.29:3000/users")
      .then((response) => {
        console.log("test1");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log("test 1 passedr");
        return response.json();
      })
      .then(async (json) => {
        console.log("hola : ", JSON.stringify(json));
        console.log("hola : ", json.length);
        // await setUsers(json);
        await setGlobalState({
          ...globalState,
          users: json,
        });
        console.log("2glove: ", JSON.stringify(globalState));
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        // Handle the error here, maybe display an error message to the user
      });
  }, []);
  if (!globalState.users) {
    return <Text>Cargando...</Text>;
  }
  return (
    <ScrollView>
      {
        <View style={styles.cardContainer}>
          {globalState.users.map(
            ({ names, id, dates, surnames, cosam, avatarUrl }) => (
              <Card
                key={id}
                names={names}
                surnames={surnames}
                avatarUrl={avatarUrl}
                dates={dates}
                id={id}
                cosam={cosam[0].toUpperCase() + cosam.slice(1)}
              ></Card>
            )
          )}
        </View>
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardContainer: {
    paddingBottom: 30,
  },
});
