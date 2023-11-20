import {  StyleSheet } from "react-native";

const styles = StyleSheet.create({
    posts: {
      flexDirection: "row",
      justifyContent: "space-between",
      height: 200,
      padding: 8,
      marginBottom: 15,
    },
    postTxtContainer: {
      width: 180,
      paddingLeft: 30,
    },
    postTxtTtl: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#000",
      textAlign: "left",
      paddingBottom: 5,
    },
    postImg: {
      flex: 1,
      height: "80%",
      width: "80%",
      resizeMode: "cover",
    },
  });

  export { styles};