import React, { Component } from 'react';
import { View } from 'react-native';
import { Card } from '../../component';
import styles from '../../utility/styleHelper';

export default class DetailsOfBooks extends Component {
  state = {
    /** Use all of previous screen values */
    name: this.props.navigation.getParam('name'),
    image: this.props.navigation.getParam('image'),
    author: this.props.navigation.getParam('author'),
  };

  render() {
    const { name, image, author } = this.state;
    return (
      <View
        style={styles.sectionCentered}>
        <Card img={image} title={name} author={author} />
      </View>
    );
  }
}
