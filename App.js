import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HistoryScreen } from "./src/screens/HistoryScreen";
import { ListScreen } from "./src/screens/ListScreen";
import { HomeStackNavigator } from "./src/screens/HomeStackNavigator";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HomeStack" component={HomeStackNavigator} />
        <Drawer.Screen name="ListScreen" component={ListScreen} />
        <Drawer.Screen name="Historial" component={HistoryScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
