import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SingUp from "../screens/singUp";
import Login from "../screens/login";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName={"SingUp"}>
      <Stack.Screen
        name="SingUp"
        component={SingUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}