import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class imageOverlay extends React.Component {
    render() {

        let header = this.props.header ? 
        <Text style={styles.overlayHeader}>{this.props.header}</Text>
        : null;

        let paragraph = this.props.paragraph ? 
        <Text style={styles.overlayText}>{this.props.paragraph}</Text>
        : null;

        return (
            <View>
                {header}
                {paragraph}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    overlayHeader: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 1,

        alignSelf: 'center',
        fontSize: 29,
        color: 'white',
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#e8eaed',
        opacity: 0.5,
        fontWeight: 'bold',
    },

    overlayText: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.6,
        shadowRadius: 3,
        elevation: 1,
        opacity: 0.4,

        alignSelf: 'center',
        fontSize: 16,
        fontFamily: 'italic',
        color: 'white',
        textAlign: 'center',
        padding:8,
        marginTop: 8,
        backgroundColor: 'lightgray',
    }
})
