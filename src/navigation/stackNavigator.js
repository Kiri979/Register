import {useContext} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SingUp from "../screens/singUp";
import Login from "../screens/login";
import Home from "../screens/Home";
import ReadPost from "../screens/readPost";
import { AuthContext } from "../hooks/context/context";

const Stack = createStackNavigator();

export default function StackNavigator() {
  const { isTokenValid } = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName={ isTokenValid ? "Home" : "Login"}>
      <Stack.Screen name="SingUp" component={SingUp} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="ReadPost" component={ReadPost} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
