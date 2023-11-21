import React, { useState, useContext } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/homeStyle";
import { AuthContext } from "../hooks/context/context";
import PostList from '../components/postList';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Home = ({ navigation }) => {
  const [text, setText] = useState("");
  const {userInfo, setUserInfo, isTokenValid, setIsTokenValid } = useContext(AuthContext)

  const renderContent = () => {
    console.log("Rendering content...");
    if (isTokenValid) {
      console.log("Token is valid");
      return (
    
        <View style={styles.container}>
          <View style={styles.headerLogo}>
            <TouchableOpacity>
              <Ionicons name="menu" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="user-circle-o" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
          <FontAwesome name="search" size={24} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              onChangeText={(newText) => setText(newText)}
              defaultValue={text}
              placeholderTextColor="#000"
            />
          </View>
    
          <View style={styles.horizontal}>
            <View style={styles.row}>
              <Text style={styles.TxtCat}>Featured</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.TxtCat}>Latest</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.TxtCat}>Trending</Text>
            </View>
          </View>

          <View>
            <PostList navigation={navigation} searchText={text} />
          </View>
    

        </View>
      );
    } else {
      console.log("Token is not valid, navigating to Login");
      navigation.replace('Login');
      return null;
    }
  }
  return renderContent();
};

export default Home;


