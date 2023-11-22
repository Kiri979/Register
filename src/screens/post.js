import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import postService from "../services/postServices";
import { styles } from "../styles/postStyle";

const Post = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedImage = result.assets[0];
      setImage(selectedImage.uri);
    }
  };

  const createPost = () => {
    const postData = {
      title,
      body,
      image,
    };

    console.log("Request Data:", postData);

    postService
      .createPost(postData, "yourAuthToken")
      .then((response) => {
        console.log("Post created successfully:", response.data);
        navigation.goBack();
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.imageContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Text>Tap to pick an image</Text>
          )}
        </View>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Enter Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Enter body"
        multiline
        value={body}
        onChangeText={(text) => setBody(text)}
      />

      <Button title="Create Post" onPress={createPost} />
    </View>
  );
};

export default Post;
