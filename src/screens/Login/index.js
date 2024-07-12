import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Animated,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import ButtonGradient from "./ButtonGradient";
import { AppContext } from "../../context/AppContext";

const { width, height } = Dimensions.get("window");

export const LoginScreen = ({ navigation }) => {
  const { globalState, setGlobalState } = useContext(AppContext);
  const [rut, setRut] = useState("");
  const handleLogin = () => {
    console.log("Rut: ", rut);
    // Ejemplo de cómo puedes hacer una solicitud para el login
    fetch("https://shonhouse.vercel.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rut: rut }),
    })
      .then((response) => response.json())
      .then(async (data) => {
        console.log("DATA");
        console.log(data.message);
        console.log(data.success);
        if (data.success) {
          await setGlobalState({
            ...globalState,
            userSession: { rut },
          });
          // Alert.alert("Login esquizito");
          navigation.navigate("HomeStack"); // O cualquier otra acción después del login
        } else {
          console.log("Login fallido", data.message);
        }
      })
      .catch((error) => {
        Alert.alert("Error", "No se pudo conectar al servidor");
        console.error("Error:", error);
      });
  };
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [keyboardHeight] = useState(new Animated.Value(0));

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", (e) => {
      setKeyboardStatus(true);
      Animated.timing(keyboardHeight, {
        duration: 300,
        toValue: e.endCoordinates.height,
        useNativeDriver: false,
      }).start();
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
      Animated.timing(keyboardHeight, {
        duration: 300,
        toValue: 0,
        useNativeDriver: false,
      }).start();
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  function SvgTop() {
    return (
      <Svg
        width={500}
        height={324}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M297.871 315.826c73.405 13.896 165.338-13.964 202.129-29.63V230H1.326v63.5c69.15-42.913 204.789 4.957 296.545 22.326z"
          fill="url(#prefix__paint0_linear_103:6)"
          fillOpacity={0.5}
        />
        <Path
          d="M237.716 308.627C110.226 338.066 30.987 318.618 0 304.77V0h500v304.77c-43.161-12.266-134.794-25.581-262.284 3.857z"
          fill="url(#prefix__paint1_linear_103:6)"
        />
        <Defs>
          <LinearGradient
            id="prefix__paint0_linear_103:6"
            x1={492.715}
            y1={231.205}
            x2={480.057}
            y2={364.215}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FFB677" />
            <Stop offset={1} stopColor="#FF3CBD" />
          </LinearGradient>
          <LinearGradient
            id="prefix__paint1_linear_103:6"
            x1={7.304}
            y1={4.155}
            x2={144.016}
            y2={422.041}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FFB677" />
            <Stop offset={1} stopColor="#FF3CBD" />
          </LinearGradient>
        </Defs>
      </Svg>
    );
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.mainContainer}
    >
      <Animated.View
        style={[
          styles.content,
          {
            transform: [
              {
                translateY: keyboardHeight.interpolate({
                  inputRange: [0, height],
                  outputRange: [0, -height / 2.5],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
        ]}
      >
        <View style={styles.containerSVG}>
          <SvgTop />
        </View>
        <View style={styles.container}>
          <Text
            style={[styles.titulo, keyboardStatus && styles.tituloKeyboardOpen]}
          >
            SHONHOUSE
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="rut"
              style={styles.textInput}
              value={rut}
              onChangeText={setRut}
            />
            {/* <TextInput
              placeholder="password"
              style={styles.textInput}
              secureTextEntry={true}
            /> */}
            <ButtonGradient onPress={handleLogin} />
          </View>
        </View>
      </Animated.View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
  },
  containerSVG: {
    width: width,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  titulo: {
    fontSize: 50,
    color: "#34434D",
    fontWeight: "bold",
    marginBottom: 40,
  },
  tituloKeyboardOpen: {
    marginTop: 20, // Añade margen superior cuando el teclado está abierto
    marginBottom: 0, // Reduce el margen inferior cuando el teclado está abierto
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  textInput: {
    marginTop: 10,
    paddingStart: 30,
    width: "100%",
    maxWidth: 300,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});
