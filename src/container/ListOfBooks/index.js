import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as booksAction from '../../redux/action/books';
import styles from './styles';
import { Loader } from '../../component';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.apiCallSuccess) {
      return {
        books: props.bookInfo,
      };
    }
    if (props.bookInfo !== state.books) {
      return {
        books: props.bookInfo,
      };
    }
    return null;
  }
  componentDidMount() {
    const { getAllBooks } = this.props;
    getAllBooks();
  }
  render() {
    const { books } = this.state;
    const { apiCalling } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header View */}

        <View style={styles.headerView}>
          <View style={styles.headingTitleContainer}>
            <Text style={styles.headingText}>Title</Text>
          </View>
          <View style={styles.headingTitleContainer}>
            <Text style={styles.headingText}>Author</Text>
          </View>

          {/* For very left space */}

          <View style={{ flex: 1 }} />
        </View>

        {/*  List of books  */}
        <FlatList
          data={books}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('DetailsOfBooks', {
                  name: item.volumeInfo.title,
                  image: item.volumeInfo.imageLinks.thumbnail,
                  author: item.volumeInfo.authors,
                })
              }>
              <View style={[styles.headerView, { padding: 5 }]}>
                <View style={{ flex: 3 }}>
                  <Text style={styles.text}>{item.volumeInfo.title}</Text>
                </View>
                <View style={{ flex: 2 }}>
                  <Text style={styles.text}>{item.volumeInfo.authors}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.navButton}>></Text>
                </View>
              </View>
              <View style={styles.hr} />
            </TouchableOpacity>
          )}
        />
        <Loader loading={apiCalling} />
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(booksAction, dispatch);
};

const mapStateToProps = state => ({
  apiCalling: state.getAllBooks.apiCalling,
  apiCallSuccess: state.getAllBooks.apiCallSuccess,
  apiCallError: state.getAllBooks.apiCallError,
  bookInfo: state.getAllBooks.bookInfo,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Books);
