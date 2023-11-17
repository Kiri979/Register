import React, { useContext, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/loginStyle";
import { Formik } from "formik";
import authService from "../services/authServices";
import { AuthContext } from "../hooks/context/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginValidation } from "../components/singUpValidation";


const Login = ({navigation}) => {
  const [form, setForm] = useState({email: "", password: ""})
  const {userInfo, setUserInfo, setIsTokenValid } = useContext(AuthContext)


  const FormSubmit = (values, actions) => {
    authService.login(values.email, values.password)
      .then(response => {
        console.log("Login successfully");
        console.log(response.data);
        setUserInfo(response.data);
        setIsTokenValid(true);
        navigation.navigate('Home');
        AsyncStorage.setItem('userInfo', JSON.stringify(response.data));
      })
      .catch(error => console.log(error));
  }
  
  return (
    <Formik
      initialValues={form}
      enableReinitialize={true}
      validationSchema ={LoginValidation}
      onSubmit={(values, actions) => {FormSubmit(values, actions);}}
      onReset={(values) => {}}
    >
      {({
        values,
        errors,
        handleChange,
        setFieldTouched,
        handleSubmit,
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
              {errors.email && (
                <Text style={styles.errorsTxt}>{errors.email}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.title}>Password</Text>
              <TextInput
                placeholder="Enter your password"
                style={styles.input}
                secureTextEntry={true}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
              />
              {errors.password && (
                <Text style={styles.errorsTxt}>{errors.password}</Text>
              )}
            </View>

            <View style={styles.inputGroupBtn}>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={handleSubmit}
              >
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
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Login;
