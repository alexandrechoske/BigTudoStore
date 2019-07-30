import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Image
                    source={require('./../../../assets/003-box.png')}
                    style={styles.cart}
                    />
                    <Text style={styles.logo}>Big Tudo Store</Text>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        marginTop: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 4,
        borderBottomColor: '#dccc'    
    },
    cart: {
        width: 50,
        height: 40,

    },

    logo: {
        fontSize: 20,
        marginLeft: 10,
        fontStyle: 'italic',
        color: '#2928'

    }
})
