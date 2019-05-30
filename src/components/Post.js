import React from 'react';

import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

// import { Container } from './styles';

const Post = ({ data }) => (
  <View style={styles.postContainer}>
    <View style={styles.headerPost}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.name}>{data.name}</Text>
    </View>

    <ScrollView style={styles.textContainer}>
      <Text style={styles.message}>{data.message}</Text>
    </ScrollView>
  </View>
);

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#FFF',
    padding: 10,
    marginHorizontal: 20,
    marginTop: 20,

    borderRadius: 5,
    borderColor: '#CCC',
    borderWidth: 1,
    minHeight: 50,
  },
  headerPost: {
    borderBottomWidth: 1,
    borderColor: '#CCC',
    paddingBottom: 5,
  },
  title: {
    color: '#313131',
    fontSize: 16,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 14,
    fontWeight: '200',
  },
  textContainer: {
    marginTop: 5,
    maxHeight: 150,
  },
  message: {
    textAlign: 'justify',
  },
});

export default Post;
