import React, { Component } from 'react'
import { View, Image, Dimensions, Text, StyleSheet, AsyncStorage, YellowBox, Button, Linking } from 'react-native'
import ImageZoom from 'react-native-image-pan-zoom';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Description extends Component {
    static navigationOptions = false

    constructor() {
        super();
        this.state = {
            textInputData: '',
            getValue: '',
            
        }
    }

    _storeData = async () => {
        const { Peça } = this.props.navigation.state.params

        try {
            const myArray = (await AsyncStorage.getItem('@MySuperStore:key'));

            if (myArray == null) {

                await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify([Peça.Ref]));
            } else if
                (myArray.includes(Peça.Ref)) {
                alert('Já existe')

            } else {
                if (myArray !== null) {
                    const data = JSON.parse(myArray);
                    await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify([...data, Peça.Ref]));

                } else {
                    await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify([Peça.Ref]));
                }
            }

        } catch (error) {
            console.log(error) // Error saving data      
        }
    }

    _retrieveData = async () => {

        try {
            const myArray = await AsyncStorage.getItem('@MySuperStore:key');
            if (myArray !== null) {
                // We have data!!
                console.log(JSON.parse(myArray));
                console.log(JSON.parse(myArray).length)
                console.log(JSON.stringify(myArray))
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    _cleanData = async () => {
        AsyncStorage.clear()
    } 
    
    render() {

        YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core']);

        const { Peça } = this.props.navigation.state.params       
            

        return (

            <View style={styles.mainContainer}>                
                
                <View style={styles.imageContainer}>             

                <ImageZoom style={styles.zoomImageContainer}

                    cropWidth={Dimensions.get('window').width}
                    cropHeight={300}
                    imageWidth={Dimensions.get('window').width}
                    imageHeight={500}>
                    <Image style={styles.imageStyle}
                        source={{ uri: `${Peça.Imagem}` }} />
                </ImageZoom>
                <Text style={{ fontSize: 10, textAlign: 'center', paddingBottom: 10 }}>
                    Dica: Dê duplo clica na imagem para ampliar ou diminuir!
                    Assim você pode ver cada detalhe magnífico das peças õ/
                </Text>
                </View>
                

                <View style={styles.descricaoContainer}>

                    <View style={styles.precoContainer}>
                        <Text style={{textAlign: 'center', fontStyle: 'italic', fontSize: 30 }}>R${Peça.Preço}0</Text>
                    </View>
                        
                    <View style={styles.descricaoContainers}>
                    <Text style={{ fontSize: 15, textAlign: 'center' }}>{Peça.Descr}</Text>
                    </View>
                    <View style={styles.descricaoContainers}>
                        <Text style={styles.textosStyles}>Folheado: </Text>
                        <Text style={styles.textosStyles}>{Peça.Folheado}</Text>
                    </View>

                    <View style={styles.descricaoContainers}>
                        <Text style={styles.textosStyles}>Categoria:</Text>
                        <Text style={styles.textosStyles}>Feminino</Text>
                    </View>
                    
                    
                </View>

                <View style={styles.buttonContainer}>

                    <View style={styles.buttonContainerLista}>

                        <Button
                            color="lightpink"
                            fontColor="black"
                            size={10}
                            onPress={this._retrieveData} title="Ver Lista" />
  

                        <Button
                            color="lightpink"
                            size={10}
                            onPress={this._storeData} title="Adicionar" />    

                        <Button
                            color="lightpink"
                            size={10}
                            onPress={this._cleanData} title="Limpar" />    

                        </View>
                        </View>
                            {/* 
                        <Button
                                color="silver"
                                Button onPress={() => this.props.navigation.goBack()} title="Voltar" /> */}

                        
                        <View style={styles.buttonContainerWhats}>

                        <Icon style={styles.iconWhats} 
                        onPress={() => Linking.openURL('whatsapp://send?text=' + (JSON.stringify(myArray)) + '&phone=554196194300')}
                                name="whatsapp"
                                size={50}
                                color="green"
                            />                                  

                        </View>
            </View>

        )

    }
}

const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: 'white'

    },

    zoomImageContainer: {
        borderRadius: 25,

    },

    imageContainer: { 
                

    },

    imageStyle: {

        width: "100%",
        height: "100%",        

    },



    descricaoContainer: {
        marginLeft: 40,
        width: '80%',
        height: '22.5%',
        backgroundColor: 'white',
        borderRadius: 25,
        borderColor: '#CCCC',
        borderWidth: 2,
        elevation: 10,
        marginBottom: 20,
        
        },
        
            precoContainer: {                   
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                height: '25%',
                paddingBottom: 50,
            },

            descricaoContainers: {
                
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                height: 30,
                flexDirection: 'row',
                justifyContent: 'space-around'
            },

            textosStyles: {
                fontStyle: 'italic', 
                fontSize: 15

            },


    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
        
    },

    buttonContainerLista: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        marginTop: 10,
       
    },

    buttonContainerWhats: {
        
        marginTop: 50,
        borderRadius: 2,          
        alignItems: 'center',
    },

    iconWhats: {  

    }

})