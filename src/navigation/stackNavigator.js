import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SingUp from "../screens/singUp";
import Login from "../screens/login";
import Home from "../screens/home";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName={"Login"}>
      <Stack.Screen name="SingUp" component={SingUp} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
