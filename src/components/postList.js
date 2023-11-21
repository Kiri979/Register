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

  const localImages = [
    require('../assets/image/img_post02.png'),
    require('../assets/image/img_post03.png'),
    require('../assets/image/img_post04.png'),
    require('../assets/image/img_post05.png'),
    require('../assets/image/img_post06.png'),
  ];

  const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    const month = date.toLocaleString('default', { month: 'long' });
    const minutes = date.getMinutes();
    return `${month} ${minutes} min ago`;
  };

  const renderPost = ({ item, index }) => {
    const postImage = item.image ? { uri: item.image } : localImages[index % localImages.length];
    const formattedCreatedAt = formatCreatedAt(item.created_at);

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("ReadPost", { post: item })}
      >
        <View style={styles.posts}>
          <Image style={styles.postImg} source={postImage} />
          <View style={styles.postTxtContainer}>
            <Text style={styles.postTxtTtl}>{item.title}</Text>
            <Text style={styles.postTxt}>{formattedCreatedAt}</Text>
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
