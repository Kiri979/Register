import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: StatusBar.currentHeight,
      paddingHorizontal: 30,
    },
    loadingContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      height: 50,
      width: "100%",
      marginTop: 20,
      marginBottom: 40,
    },
    searchInput: {
      padding: 10,
      paddingLeft: 20,
      backgroundColor: "#F7F8F9",
      borderRadius: 10,
    },
    icon: {
      position: "absolute",
      right: 10,
      top: -37,
    },
  
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 60,
    },
    // row: {
    //   fontSize: 20
    // },
    vertical: {
      flexDirection: "column",
      height: "100%",
      marginBottom: 60,
    },
    posts: {
      flexDirection: "row",
      justifyContent: "space-between",
      height: 200,
      padding: 8,
      marginBottom: 15,
    },
    postTxtContainer: {
      width: 180,
      paddingHorizontal: 10
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
      height: "100%",
      width: "100%",
      resizeMode: "cover",
    },
  });

  export { styles};