import React from 'react';
import { View, Text } from 'react-native';

const PostListItem = ({ post }) => {
  return (
    <View>
      <Text>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  );
};

export default PostListItem;
