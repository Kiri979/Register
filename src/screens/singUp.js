import React, { useContext, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/singUpStyle";
import { Formik } from "formik";
import authService from "../services/authServices";
import { SignUpValidation } from "../components/singUpValidation";

const SingUp = ({navigation}) => {
  const [form, setForm] = useState({name: "", email: "", phone: "", password: "", confirmPassword: ""})
  const FormSubmit = (values, actions) => {
    let userData = {
      name: values.name,
      email: values.email,
      phone: values.phone, 
      password: values.password, 
      confirmPassword: values.confirmPassword
    }

    console.log("User Data:", userData);

    authService.createUser(userData).then(response => {
      console.log("Create successfully");
      console.log(response);
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
        handleChange,
        setFieldTouched,
        handleSubmit,
      }) => (
        <View style={styles.container}>
          <View style={styles.body}>
            <View style={styles.header}>
              <Text style={styles.headerTlt}>Register🖤</Text>
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
              {errors.name && (
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
              {errors.email && (
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
              {errors.phone && (
                <Text style={styles.errorsTxt}>{errors.phone}</Text>
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
            <View style={styles.inputGroup}>
              <Text style={styles.title}>Confirm Password</Text>
              <TextInput
                placeholder="Enter your password again"
                style={styles.input}
                secureTextEntry={true}
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                onBlur={() => setFieldTouched("confirmPassword")}
              />
              {errors.confirmPassword && (
                <Text style={styles.errorsTxt}>{errors.confirmPassword}</Text>
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
