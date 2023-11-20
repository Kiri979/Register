import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  readPostContainer: {
    flex: 1,
  },
  headerLogo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    position: "relative",
    top: 60,
    zIndex: 100,
  },
  readPostBody: {
    paddingHorizontal: 35,
    paddingTop: 20,
  },
  readPostImg: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: "100%",
    height: "70%",
  },
  readPostTtl: {
    fontWeight: "bold",
    fontSize: 25,
    paddingBottom: 15,
  },
});

export default styles;
