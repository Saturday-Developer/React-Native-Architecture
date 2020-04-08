import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

export default ({img, author, title}) => (
  <View style={styles.container}>
    <Image style={styles.img} source={{uri: img}} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{author}</Text>
    </View>
  </View>
);
