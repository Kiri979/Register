import * as Yup from "yup";

export const SignUpValidation = Yup.object().shape({
  name: Yup.string()
    .min(6, "Too Short!")
    .max(40, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Please enter your phone no."),
  password: Yup.string()
    .min(8)
    .required("Please enter your password.")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must include"),
    password_confirmation: Yup.string()
    .min(8)
    .oneOf([Yup.ref("password")], "Your Password do not match.")
    .required("Confirm password is required."),
});
