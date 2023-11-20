import { View, Text, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";
import postService from "../services/postServices";
import { styles } from "../styles/postListStyle";
import { TouchableOpacity } from "react-native-gesture-handler";

const PostList = ({ navigation, searchText }) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    postService
      .getAllPosts()
      .then((response) => {
        setPostList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderPost = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("ReadPost", { post: item })}
      >
        <View style={styles.posts}>
          <Image style={styles.postImg} source={{ uri: item.image }} />
          <View style={styles.postTxtContainer}>
            <Text style={styles.postTxtTtl}>{item.title}</Text>
            <Text style={styles.postTxt}>{item.created_at}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const filterPosts = () => {
    return postList.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  return (
    <FlatList
      data={filterPosts()}
      renderItem={renderPost}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={true}
    />
  );
};

export default PostList;
