import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  body: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingBottom: 50,
  },
  headerTlt: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputGroup: {
    width: "90%",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#F7F8F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
  },
  errorsTxt: {
    fontSize: 10,
    color: "#fc5185"
  },
  title: {
    color: "#000",
    alignSelf: "flex-start",
    marginBottom: 5,
    fontSize: 15,
    fontWeight: "bold",
  },
  showHideIcon: {
    position: 'absolute',
    right: 10, 
    top: 45,
  },
  inputGroupBtn: {
    width: "90%",
    marginTop: 30,
  },
  registerBtn: {
    backgroundColor: "#1E232C",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginBottom: 40,
  },
  registerBtnTxt: {
    fontSize: 15 ,
    color: "#fff" , 
    textAlign: "center",
  },

});
  export { styles};