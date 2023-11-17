// import React, {useContext, useEffect, useState} from 'react';
// import {Button, StyleSheet, Text, View} from 'react-native';
// import Spinner from 'react-native-loading-spinner-overlay';
// import {AuthContext} from '../context/AuthContext';
// import postService from '../services/postServices';
// import PostList from '../components/postList';


// const Home = () => {
//   const {userInfo, isLoading, logout} = useContext(AuthContext);

//   const [postList, setPostList] = useState([]);

//   useEffect( () => {
//     fetchPosts();
//   } )

//   const fetchPosts = () => {
//     postService.getAllPosts().then(response => {
//       setPostList(response.data)
//     }).catch(
//       error => console.log(error)
//     )
//   }

//   return (
//     <View>
//       <PostList />
//     </View>


//     <View style={styles.container}>
//       <Spinner visible={isLoading} />
//       <Text style={styles.welcome}>Welcome {userInfo.user.name}</Text>
//       <Button title="Logout" color="red" onPress={logout} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   welcome: {
//     fontSize: 18,
//     marginBottom: 8,
//   },
// });

// export default Home;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})