/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet, ScrollView, Text, View,
} from 'react-native';
import Post from './components/Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'React-Native',
        name: 'Rafael Sobucki',
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 2,
        title: 'React-Native',
        name: 'Rafael Sobucki',
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 3,
        title: 'React-Native',
        name: 'Rafael Sobucki',
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 4,
        title: 'React-Native',
        name: 'Rafael Sobucki',
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerApp}>
          <Text style={styles.titleApp}>React-Native App</Text>
        </View>
        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f57073',
  },
  headerApp: {
    height: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  titleApp: {
    fontSize: 20,
    color: '#404040',
    fontWeight: 'bold',
  },
});
