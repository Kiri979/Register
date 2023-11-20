import { View, Text, Image, Button } from "react-native";
import React from "react";
import styles from "../styles/readPostStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const ReadPost = ({ navigation, route }) => {
  const { post } = route.params;

  return (
    <View style={styles.readPostContainer}>
      <View style={styles.headerLogo}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Ionicons name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="menu" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: post.image }} style={styles.readPostImg} />
      <View style={styles.readPostBody}>
        <Text style={styles.readPostTtl}>{post.title}</Text>
        <Text style={styles.readPostPara}>{post.body}</Text>
      </View>
    </View>
  );
};

export default ReadPost;
