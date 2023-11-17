import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/homeStyle";
// import {AuthContext} from '../context/AuthContext';
// import postService from '../services/postServices';
// import PostList from '../components/postList';
import { Ionicons } from '@expo/vector-icons';

const data = [
  {
    id: "1",
    imageSource: require("../assets/image/img_post06.png"),
    postTxtTtl: "Gra f falkrwef ha glrhlaiwerfhlhaellf fhal",
    postText: "Jan 49 43 90",
  },
  {
    id: "2",
    imageSource: require("../assets/image/img_post03.png"),
    postTxtTtl: "Gra f falkrwef ha glrhlaiwerfhlhaellf fhal",
    postText: "Jan 49 43 90",
  },
  {
    id: "3",
    imageSource: require("../assets/image/img_post04.png"),
    postTxtTtl: "Gra f falkrwef ha glrhlaiwerfhlhaellf fhal",
    postText: "Jan 49 43 90",
  },
  {
    id: "4",
    imageSource: require("../assets/image/img_post05.png"),
    postTxtTtl: "Gra f falkrwef ha glrhlaiwerfhlhaellf fhal",
    postText: "Jan 49 43 90",
  },


];

const renderPost = ({ item }) => {
  return (
    <View style={styles.posts}>
    <Image style={styles.postImg} source={item.imageSource} />
      <View style={styles.postTxtContainer}>
        <Text style={styles.postTxtTtl}>{item.postTxtTtl}</Text>
        <Text style={styles.postTxt}>{item.postText}</Text>
      </View>
    </View>
  );
};

const Home = ({ navigation }) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.headerLogo}>
        <Ionicons name="menu" size={30} color="black" />
        <View>
          
        </View>
      </View>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
          placeholderTextColor="#000"
        />
      </View>

      <View style={styles.horizontal}>
        <View style={styles.row}>
          <Text>Featured</Text>
        </View>
        <View style={styles.row}>
          <Text>Latest</Text>
        </View>
        <View style={styles.row}>
          <Text>Trending</Text>
        </View>
      </View>


      <FlatList
        data={data}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;


