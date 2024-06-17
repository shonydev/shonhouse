import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "./Card";

export const ListUsers = () => {
  const [users, setUsers] = useState([]);

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
      .then((json) => {
        console.log("hola : ", json.length);
        setUsers(json);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        // Handle the error here, maybe display an error message to the user
      });
  }, []);
  if (!users.length) {
    return <Text>Cargando...</Text>;
  }
  return (
    <ScrollView>
      {
        <View style={styles.cardContainer}>
          {users.map(({ names, id, dates, surnames, cosam, avatarUrl }) => (
            <Card
              key={id}
              names={names}
              surnames={surnames}
              avatarUrl={avatarUrl}
              dates={dates}
              id={id}
              cosam={cosam[0].toUpperCase() + cosam.slice(1)}
            ></Card>
          ))}
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
