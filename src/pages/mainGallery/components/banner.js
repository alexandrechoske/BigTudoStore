import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import ImageOverlay from './imageOverlay';

export default class Banner extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../../../assets/galleryImgAnel.jpg')}
                style={styles.banner} >
                
                <ImageOverlay
                    header= ' - React Native - '
                    paragraph = '- e-commerce -' />

                </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    banner: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    }
})
