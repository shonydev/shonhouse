import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ButtonGradient({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        // Button Linear Gradient
        colors={["#FFB677", "#FF3CBD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <Text style={styles.text}>Iniciar sesión</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 300,
    marginTop: 10,
  },

  text: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
