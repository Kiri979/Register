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
  headerLogo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  header: {
    height: 50,
    width: "100%",
    marginTop: 20,
    marginBottom: 40,
  },
  searchInput: {
    padding: 10,
    paddingLeft: 40,
    backgroundColor: "#F7F8F9",
    borderRadius: 10,
  },
  searchIcon: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 10,
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
  createBtn: {
    position: "absolute",
    bottom: 40,
    right: 30,
    zIndex: 100,
  },
  createBtnIcon: {
    color: "#3498db",
    fontSize: 60,
  },

});

export { styles };
