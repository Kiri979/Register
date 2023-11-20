import { View, Text, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";
import postService from "../services/postServices";
import { styles } from "../styles/postListStyle";

const PostList = ({ navigation }) => {
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
      <View style={styles.posts}>
        <Image style={styles.postImg} source={{ uri: item.image }} />
        <View style={styles.postTxtContainer}>
          <Text style={styles.postTxtTtl}>{item.title}</Text>
          <Text style={styles.postTxt}>{item.created_at}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={postList}
      renderItem={renderPost}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default PostList;
