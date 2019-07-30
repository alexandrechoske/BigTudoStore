import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';



export default class Main extends Component {
    static navigationOptions = {
        title: "Big Tudo Store - Início"
    };


    render() {

        return (
            <View style={styles.container}>

                <ScrollView style={styles.galleryPrincipal}
                    showsVerticalScrollIndicator={false}>


                    <View style={styles.containerCol}>

                            <View style={styles.containerPeças}>
                            <TouchableOpacity 
                            onPress={() => 
                            { this.props.navigation.navigate('productListv2',
                                {filtroNavMainGallery: 'Brinco'})}}>
                        
                                <Image style={styles.imageGallery} source={require('../../assets/002-earrings-4.png')} />
                                <Text style={styles.titleGallery}>Brincos</Text>
                                <Text style={styles.subtitleGallery}>A partir de R$9,90</Text>
                                </TouchableOpacity>

                            </View>

                        
                    <View style={styles.containerPeças}>
                        <TouchableOpacity 
                        onPress={() => 
                        { this.props.navigation.navigate('productListv2',
                        { filtroNavMainGallery: 'Corrente'})}}>
                            <Image style={styles.imageGallery} source={require('../../assets/006-necklace-3.png')} />
                            <Text style={styles.titleGallery}>Colares</Text>
                            <Text style={styles.subtitleGallery}>A partir de R$9,90</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>

                    <View style={styles.containerCol}>
                        <View style={styles.containerPeças}>
                        <TouchableOpacity 
                        onPress={() => 
                            { this.props.navigation.navigate('productListv2',
                            { filtroNavMainGallery: 'Anel'})}}>

                            <Image style={styles.imageGallery} source={require('../../assets/039-diamond-ring.png')} />
                            <Text style={styles.titleGallery}>Anéis</Text>
                            <Text style={styles.subtitleGallery}>A partir de R$9,90</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.containerPeças}>
                        <TouchableOpacity 
                        onPress={() => 
                            { this.props.navigation.navigate('productListv2',
                            { filtroNavMainGallery: 'Aliança'})}}>
                            <Image style={styles.imageGallery} source={require('../../assets/031-diamond-ring-1.png')} />
                            <Text style={styles.titleGallery}>Alianças</Text>
                            <Text style={styles.subtitleGallery}>A partir de R$9,90</Text>
                        </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.containerCol}>
                        <View style={styles.containerPeças}>
                        <TouchableOpacity 
                        onPress={() => 
                            { this.props.navigation.navigate('productListv2',
                            { filtroNavMainGallery: 'Pingente'})}}>
                            <Image style={styles.imageGallery} source={require('../../assets/043-pendant.png')} />
                            <Text style={styles.titleGallery}>Pingentes</Text>
                            <Text style={styles.subtitleGallery}>A partir de R$19,90</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerPeças}>
                        <TouchableOpacity 
                        onPress={() => 
                            { this.props.navigation.navigate('productListv2',
                            { filtroNavMainGallery: 'Pulseira'})}}>
                        
                            <Image style={styles.imageGallery} source={require('../../assets/024-bracelet.png')} />
                            <Text style={styles.titleGallery}>Pulseiras</Text>
                            <Text style={styles.subtitleGallery}>A partir de R$19,90</Text>
                            </TouchableOpacity>
                        </View>
                        </View>

                        <View style={styles.containerCol}>

                        <View style={styles.containerPeças}>
                        <TouchableOpacity 
                        onPress={() => 
                            { this.props.navigation.navigate('productListv2',
                            { filtroNavMainGallery: 'Relogio'})}}>
                        
                            <Image style={styles.imageGallery} source={require('../../assets/035-watch.png')} />
                            <Text style={styles.titleGallery}>Relógios</Text>
                            <Text style={styles.subtitleGallery}>A partir de R$19,90</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerPeças}>
                        <TouchableOpacity 
                        onPress={() => 
                            { this.props.navigation.navigate('productListv2',
                            { filtroNavMainGallery: 'Oculos'})}}>
                        
                            <Image style={styles.imageGallery} source={require('../../assets/030-sunglasses.png')} />
                            <Text style={styles.titleGallery}>Óculos</Text>
                            <Text style={styles.subtitleGallery}>A partir de R$19,90</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    contentContainer: {
        
        flexDirection: 'row',
        padding: 5,

    },

    containerPeças: {
        
        width: '45%',
        borderRadius: 25,
        borderColor: 'black',
        borderWidth: 1.5,
        alignSelf: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        marginBottom: 30,
        padding: 15,
        backgroundColor: 'white',
        elevation: 20,
        
    },

    containerCol: {
        

        padding: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },

    galleryPrincipal: {

        paddingVertical: 10,
        paddingHorizontal: 10,
    },

    titleGallery: {

        fontWeight: 'bold',
        fontSize: 23,
        color: 'black',
        marginBottom: 10,
        alignSelf: 'center',

    },

    subtitleGallery: {

        fontSize: 15,
        fontStyle: 'italic',
        color: 'black',
        marginBottom: 10,
        alignSelf: 'center',

    },

    imageGallery: {
        
        width: 95,
        height: 95,
        alignSelf: 'center',
        alignContent: 'center',
    },

    container: {
      
        backgroundColor: 'white',
        flexDirection: 'column',
    },

})