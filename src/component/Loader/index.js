import React from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import * as color from '../../utility/colors';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    loaderContainer: {
        zIndex: 1,
        elevation: 2,
        height,
        width,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.COLOR_TRANSPARENT_OPACITY,
    },
    indicator: {
        backgroundColor: color.COLOR_BLACK,
        height: 40,
        width: 40,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
});

export default ({ loading }) =>
    loading && (
        <View style={styles.loaderContainer}>
            <View style={styles.indicator}>
                <ActivityIndicator
                    size="large"
                    animating={loading}
                    color={color.COLOR_WHITE}
                />
            </View>
        </View>
    );
