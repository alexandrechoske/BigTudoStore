import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class LoginForm extends Component {
    render () {
        return (

            <View style={styles.formContainer}>
 <StatusBar
     barStyle="light-content"
 />


 <View style={styles.formContainer}>
     <TextInput behavior="padding" placeholder="Usuário ou E-mail"
         placeholderTextColor="white"
         returnKeyType="next"
         onSubmitEditing={() => this.passwordInput.focus()}
         keyboardType="email-address"
         autoCorrect={false}
         style={styles.input}

     />

     <TextInput placeholder="Senha"
         placeholderTextColor="white"
         returnKeyType="go"
         secureTextEntry
         style={styles.input}
         ref={(input) => this.passwordInput = input}
         keyboardType="default"
     />

     <View style={styles.buttonContainer}>
         <TouchableOpacity style={styles.buttonLogin}
             onPress={() => { this.props.navigation.navigate('mainGallery') }}>
             <Text style={styles.buttonText}>
                 Logar
         </Text>

         </TouchableOpacity>


     </View>
 </View>
</View>




        )
    }
 
}

const styles = StyleSheet.create({

formContainer: {
    padding: 20,
},

input: {
    height: 40,
    width: 250,
    backgroundColor: 'rgba(112,20,100,0.9)',
    marginBottom: 20,
    color: '#FFF',
    fontFamily: 'Pacifico-Regular',
    paddingHorizontal: 10,
    borderRadius: 10,
},

buttonContainer: {
    alignItems: 'center',
},

buttonLogin: {
    backgroundColor: 'white',
    paddingVertical: 0,
    borderRadius: 50,
    width: 150,
    height: 30,
    alignItems: 'center',
},

buttonText: {
    textAlign: 'center',
    color: 'purple',
    fontWeight: '500',
    fontSize: 20,

}
});