import React, { useContext, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/singUpStyle";
import { Formik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authService from "../services/authServices";
import { SignUpValidation } from "../components/singUpValidation";
import { FontAwesome } from '@expo/vector-icons';

const SingUp = ({navigation}) => {
  const [form, setForm] = useState({name: "", email: "", phone: "", password: "", password_confirmation: ""})
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const FormSubmit = (values, actions) => {
    let userData = {
      name: values.name,
      email: values.email,
      phone: values.phone, 
      password: values.password, 
      password_confirmation: values.password_confirmation
    }

    console.log("User Data:", userData);

    authService.createUser(userData).then(response => {
      console.log("Create successfully");
      console.log(response);
      AsyncStorage.setItem("userData", JSON.stringify(userData));
      navigation.navigate('Login');
    })
    .catch(error => console.log(error));
  }
  return (
    <Formik
      initialValues={form}
      enableReinitialize={true}
      validationSchema ={SignUpValidation }
      onSubmit={(values, actions) => {FormSubmit(values, actions);}}
      // onReset={(values) => {}}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        handleSubmit,
      }) => (
        <View style={styles.container}>
          <View style={styles.body}>
            <View style={styles.header}>
              <Text style={styles.headerTlt}>🖤Register🖤</Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.title}>Username</Text>
              <TextInput
                placeholder="Enter your name"
                // autoCapitalize={false}
                style={styles.input}
                value={values.name}
                onChangeText={handleChange("name")}
                onBlur={() => setFieldTouched("name")}
              />
              {errors.name && touched.name && (
                <Text style={styles.errorsTxt}>{errors.name}</Text>
              )}
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
              <Text style={styles.title}>Phone Number</Text>
              <TextInput
                placeholder="Enter your phone no."
                keyboardType="phone-pad"
                style={styles.input}
                value={values.phone}
                onChangeText={handleChange("phone")}
                onBlur={() => setFieldTouched("phone")}
              />
              {errors.phone && touched.phone && (
                <Text style={styles.errorsTxt}>{errors.phone}</Text>
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
              <TouchableOpacity onPress={togglePasswordVisibility} style={styles.showHideIcon}>
                <FontAwesome name={showPassword ? "eye" : "eye-slash"} size={24} color="black" />
              </TouchableOpacity>
              {errors.password && touched.password && (
                <Text style={styles.errorsTxt}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.title}>Confirm Password</Text>
              <TextInput
                placeholder="Enter your password again"
                style={styles.input}
                secureTextEntry={!showPassword}
                value={values.password_confirmation}
                onChangeText={handleChange("password_confirmation")}
                onBlur={() => setFieldTouched("password_confirmation")}
              />
              <TouchableOpacity onPress={togglePasswordVisibility} style={styles.showHideIcon}>
                <FontAwesome name={showPassword ? "eye" : "eye-slash"} size={24} color="black" />
              </TouchableOpacity>
              {errors.password_confirmation && touched.password_confirmation && (
                <Text style={styles.errorsTxt}>{errors.password_confirmation}</Text>
              )}
            </View>

            <View style={styles.inputGroupBtn}>
              <TouchableOpacity
                style={styles.registerBtn}
                onPress={handleSubmit}
              >
                <Text style={styles.registerBtnTxt}>SingUp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SingUp;
