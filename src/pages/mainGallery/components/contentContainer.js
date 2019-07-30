import React from 'react';
import { StyleSheet, View, TouchableOpacity, TouchableHighlight} from 'react-native';

import CustomImage from './customImage';

export default class contentContainer extends React.Component {

    render() {          

        return (
            
            <View style={styles.contentContainer}>
        
               <View style={styles.col2}>

               <TouchableHighlight onPress={() => this.props.navigation.navigate('productListv2')}>
                <CustomImage
                    imageSource={require('../../../assets/galleryImgPulseira.jpg')}
                    header='Pulseiras'
                    paragraph='A partir de R$9,90!'
                />
                </TouchableHighlight>
                 </View>
                

                <View style={styles.col1}>
                  <TouchableOpacity>  
                <CustomImage 
                    imageSource={require('../../../assets/galleryImgColar.jpg')}
                    header='Colares'
                    paragraph='A partir de R$9,90!'              
                />
                </TouchableOpacity>
                </View>
                
                <View style={styles.contentBanner}>
                    <TouchableOpacity>
                <CustomImage
                    imageSource={require('../../../assets/galleryImgBrinco.jpg')}
                    header='Brincos'
                    paragraph='A partir de R$9,90!'
                />
                    </TouchableOpacity>
                </View>

                <View style={styles.col1}>
                    <TouchableOpacity>
                <CustomImage
                     imageSource={require('../../../assets/galleryImgAnel.jpg')}
                     header='Anéis'
                     paragraph='A partir de R$9,90!'
                />
                </TouchableOpacity>
                </View>

                <View style={styles.col2}>
                    <TouchableOpacity>
                <CustomImage
                     imageSource={require('../../../assets/galleryImgColar.jpg')}
                     header='Kits'
                     paragraph='A partir de R$19,90!'
                />
                </TouchableOpacity>
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({

    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    },

    col1: {
        flex: 1,
        padding: 5,

    },

    col2: {
        flex: 2,
        padding: 5,
    },

    contentBanner: {
        width: '100%',
        justifyContent: 'center',
        padding: 5,
    
    },

    imageStyle: {
        borderRadius: 100,
        borderWidth: 5,
        borderColor: 'red'
    }
})
