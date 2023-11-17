import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import PostListItem from './postListItem';
import { fetchPosts } from '../utils/constant/constant';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadPosts();
  }, []);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <PostListItem post={item} />}
    />
  );
};

export default PostList;
