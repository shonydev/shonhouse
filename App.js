import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HistoryScreen } from "./src/screens/HistoryScreen";
import { RandomScreen } from "./src/screens/RandomScreen";
import { ListScreen } from "./src/screens/ListScreen";
import { HomeStackNavigator } from "./src/screens/HomeStackNavigator";
import { AppProvider } from "./src/context/AppContext";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="HomeStack" component={HomeStackNavigator} />
          <Drawer.Screen name="ListScreen" component={ListScreen} />
          <Drawer.Screen name="Historial" component={HistoryScreen} />
          <Drawer.Screen name="2025" component={RandomScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
