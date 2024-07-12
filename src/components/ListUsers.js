import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "./Card";
import { AppContext } from "../context/AppContext";

export const ListUsers = () => {
  // const [users, setUsers] = useState([]);
  const { globalState, setGlobalState } = useContext(AppContext);

  useEffect(() => {
    fetch("https://shonhouse.vercel.app/api/users")
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
        console.log("dattita: ", globalState);
        console.log("datazo: ", globalState.userSession.rut);
        if (globalState.userSession.rut) {
          console.log("ifif");
          const user2 = json.filter((user) => {
            console.log("invicselbe");
            console.log("user: ", user);
            return user.rut === globalState.userSession.rut;
          })[0];
          console.log("user2. ", user2);
          if (user2.type === "user") {
            console.log("uysertype: ", user2.type);
            await setGlobalState({
              ...globalState,
              users: [user2],
            });
          } else {
            console.log("elsesito: ", user2.type);
            await setGlobalState({
              ...globalState,
              users: json,
            });
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching usersitos:", error);
        // Handle the error here, maybe display an error message to the user
      });
  }, [globalState.userSession.rut]);
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
