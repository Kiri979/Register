import React, { useContext, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/loginStyle";
import { Formik } from "formik";
import authService from "../services/authServices";
import { AuthContext } from "../hooks/context/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginValidation } from "../components/loginValidation";
import { FontAwesome } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const { userInfo, setUserInfo, setIsTokenValid } = useContext(AuthContext);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const FormSubmit = async (values, actions) => {
    try {
      const response = await authService.login(values.email, values.password);
      console.log("Login successfully");
      setUserInfo(response.data);
      setIsTokenValid(true);
      AsyncStorage.setItem("userInfo", JSON.stringify(response.data));
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={form}
      enableReinitialize={true}
      validationSchema={LoginValidation}
      onSubmit={(values, actions) => {
        FormSubmit(values, actions);
      }}
      // onReset={(values) => {}}
    >
      {({
        values,
        errors,
        handleChange,
        setFieldTouched,
        handleSubmit,
        touched,
      }) => (
        <View style={styles.container}>
          <View style={styles.body}>
            <View style={styles.header}>
              <Text style={styles.headerTlt}>
                Welcome From Our Blog App, Feel Free To Post Your Feelings With
                Us 🖤
              </Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.title}>Email</Text>
              <TextInput
                placeholder="Enter your email"
                style={styles.input}
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
              />
              {errors.email && touched.email && (
                <Text style={styles.errorsTxt}>{errors.email}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.title}>Password</Text>
              <TextInput
                placeholder="Enter your password"
                style={styles.input}
                secureTextEntry={!showPassword}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.showHideIcon}
              >
                <FontAwesome
                  name={showPassword ? "eye" : "eye-slash"}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
              {errors.password && touched.password && (
                <Text style={styles.errorsTxt}>{errors.password}</Text>
              )}
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={{ color: "#f26d5b" }}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.inputGroupBtn}>
              <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
                <Text style={styles.loginBtnTxt}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.registerBtn}
                onPress={() => {
                  navigation.navigate("SingUp");
                }}
              >
                <Text style={styles.registerBtnTxt}>Register</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <Text style={styles.guestBtn}>Continue as guest</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Login;
