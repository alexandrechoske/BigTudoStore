import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Header from './components/header';
import ContentContainer from './components/contentContainer';

export default class mainGalleryv2 extends React.Component {
    render() {
        return (

           <ScrollView style={styles.container}>
                <Header/>

                <ContentContainer/>
           </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff'
    }

})
