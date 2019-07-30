import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import ImageOverlay from './imageOverlay';

export default class customImage extends React.Component {
    

    render() {
        
        return (
            <ImageBackground source={this.props.imageSource}
                style={styles.image}> 
                <ImageOverlay
                    header={this.props.header}
                    paragraph={this.props.paragraph}
                />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1

    }
})
