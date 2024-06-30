import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ListScreen")}
      >
        <LinearGradient
          colors={["#8d4dce", "#2d3fe2", "#2d60e2"]}
          style={styles.gradient}
        >
          <Text style={styles.buttonText}>Hogar Queulat</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <LinearGradient
          colors={["#2d3fe2", "#6c2de2", "#8449f3"]}
          style={styles.gradient}
        >
          <Text style={styles.buttonText}>Hogar Minino</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "rgba(255, 255, 255, 0.152)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
