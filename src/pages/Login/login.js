import React, { Component } from 'react';
import {
    StyleSheet, View, Image, Text,
    Animated, Easing, Button
} from 'react-native';

class Login extends Component {

    state = {
        aniTitleName: new Animated.Value(2),
        aniTitleDescrpt: new Animated.Value(0)
    }

    componentWillMount() {
        Animated.sequence([
            Animated.timing(this.state.aniTitleName, {
                toValue: 1,
                duration: 1500,
                easing: Easing.bounce
            }),
            Animated.timing(this.state.aniTitleDescrpt, {
                toValue: 1,
                duration: 500,
                easing: Easing.easeOutCubic
            })
        ]).start(() => {

        })
    }

    render() {
        return (
            


            <View style={styles.container}>

                <View style={styles.logoContainer}>

                    <Animated.View style={{
                        opacity: this.state.aniTitleName,
                        top: this.state.aniTitleName.interpolate({
                            inputRange: [0, 0.85],
                            outputRange: [95, 0]
                        })
                    }}
                    >

                        <Text style={styles.titleName}>Big Tudo Store</Text>


                    </Animated.View>
                    <Animated.View style={{
                        opacity: this.state.aniTitleDescrpt,
                    }
                    }
                    >

                        <Text style={styles.titleDescrpt}>Com Amor para você!</Text>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/heartGIF.gif')}
                        />
                    </Animated.View>
                </View>

                <View style={styles.formContainer}>

                <Button 
                        title="Clique aqui para entrar!"
                        color="lightpink"
                        onPress={() => { this.props.navigation.navigate('mainGallery') }}
                />
                    
                </View>

            </View>

        );
    }
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',       
        alignItems: 'center' 
    },

    formContainer: {
        width: 250,
        
    },

    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        maxHeight: 500,
    },
    logo: {
        width: 65,
        height: 65,
        marginLeft: 55,

    },

    titleName: {
        fontSize: 55,
        fontFamily: 'Pacifico-Regular',
        color: 'black',
        textAlign: 'center',
        opacity: 0.9,
        marginBottom: 15,

    },

    titleDescrpt: {
        fontSize: 20,
        fontFamily: 'Pacifico-Regular',
        color: 'black',
        textAlign: 'center',
        opacity: 0.7,
        marginBottom: 25,

    }
});

export default Login;