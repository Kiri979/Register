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
    headerLogo: {
      flexDirection: "row",
      justifyContent: "space-between"
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
    TxtCat: {
      fontSize: 18,
      fontWeight: "bold",
    },
    vertical: {
      flexDirection: "column",
      height: "100%",
      marginBottom: 60,
    },

  });

  export { styles};