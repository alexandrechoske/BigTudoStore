import React, { Component } from 'react';
import {
  StyleSheet, View, ActivityIndicator,
  FlatList, Text, Image, Alert, YellowBox,
  TouchableOpacity, Picker, Button
} from 'react-native';

import ScrollHeader from './scrollHeader';

export default class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      PickerSelectedVal: '',
      catSelectedVal: 'null',
      tipoSelectedVal: 'null'
    }

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);

  }
  

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }


  webCall = () => {

    return fetch('https://api.myjson.com/bins/9uhwf')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {
          // In this block you can do something with new state.
        });

      })
      .catch((error) => {
        console.error(error);
      });

  }


  componentDidMount() {

    this.webCall();
    

  }

  _onItemPress = (item) => {
    this.props.navigation.navigate('description', { Peça: item })
  }

  _renderPecaImage = (varSelectedFilter) => {
    switch(varSelectedFilter) {
      case "Brinco":
        return <View style={styles.imagePecaGalleryView}><Image style={styles.imagePecaGallery} source={require('../../assets/002-earrings-4.png')}/></View>;
      case "Corrente":
        return <View style={styles.imagePecaGalleryView}><Image style={styles.imagePecaGallery} source={require('../../assets/006-necklace-3.png')}/></View>;  
      case "Anel":
        return <View style={styles.imagePecaGalleryView}><Image style={styles.imagePecaGallery} source={require('../../assets/039-diamond-ring.png')}/></View>;  
      case "Aliança":
        return <View style={styles.imagePecaGalleryView}><Image style={styles.imagePecaGallery} source={require('../../assets/031-diamond-ring-1.png')}/></View>;  
      case "Pingente":
        return <View style={styles.imagePecaGalleryView}><Image style={styles.imagePecaGallery} source={require('../../assets/043-pendant.png')}/></View>;  
      case "Pulseira":
        return <View style={styles.imagePecaGalleryView}><Image style={styles.imagePecaGallery} source={require('../../assets/024-bracelet.png')}/></View>;  
      case "Relógio":
        return <View style={styles.imagePecaGalleryView}><Image style={styles.imagePecaGallery} source={require('../../assets/035-watch.png')}/></View>;  
      case "Oculos":
        return <View style={styles.imagePecaGalleryView}><Image style={styles.imagePecaGallery} source={require('../../assets/030-sunglasses.png')}/></View>;      
    }
  }

  render() {

    var varSelectedFilter = this.props.navigation.getParam('filtroNavMainGallery')

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
        
      );
    }   

    const contagemItens = 
      this.state.dataSource.filter(dadosfilter => dadosfilter.Categoria === varSelectedFilter
        & dadosfilter.Folheado === this.state.tipoSelectedVal)
          contagemItensCount = contagemItens.length;

    const EmptyComponent = () => (
      
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
        Puxa, que pena! Não tem nada por aqui :(. Tente filtrar uma Categoria e um Tipo!
        </Text>
        <Image style={{height: 100, width: 100}}
          source={require('../../../assets/images/loadgif.gif')}
        />
      </View>
    )
  
    const getItemLayout = (data, index) => (
      {length: 100,
       offset: 100 * index, index}
    );

    const renderItem = ({item }) => 
    <TouchableOpacity onPress={() => this._onItemPress(item)}>
    <View style={styles.cardContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.labelDescr} >{item.Descr}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: item.Imagem }} style={styles.imageView} />
      </View>
                     
    </View>
  </TouchableOpacity>


return (

      <View style={styles.MainContainer}>

    <ScrollHeader/>

        <View style={styles.container}>

              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 25}}>Que tipo de peça você quer ver hoje?</Text>
              </View>

          <View style={styles.pickerContainer}>     

          <View style={styles.pickerHeader} >
          <Text style={{fontSize: 20, marginTop: 5}}>Peça Selecionada: {varSelectedFilter} </Text>          
          {this._renderPecaImage(varSelectedFilter)}
          </View>

          <View style={styles.imageFolheadoGalleryView}>
          
          <Picker style={styles.pickerFolhStyle}
            selectedValue={this.state.tipoSelectedVal}
            onValueChange={(itemValue, itemIndex) => this.setState({ tipoSelectedVal: itemValue })} >

            <Picker.Item label="Filtre um tipo aqui..." value="null" />
            <Picker.Item label="Ouro" value="Ouro" />
            <Picker.Item label="Prata" value="Prata" />
            <Picker.Item label="Couro" value="Couro" />
          </Picker>

      

          { this.state.tipoSelectedVal === 'Ouro' ?           
            <View style={styles.imageFolheadoGalleryView}><Image style={styles.imageFolheadoGallery} source={require('../../../assets/images/goldIcon.png')}/></View>
          : this.state.tipoSelectedVal === 'Prata' ? 
          <View style={styles.imageFolheadoGalleryView}><Image style={styles.imageFolheadoGallery} source={require('../../../assets/images/silverIcon.png')}/></View>
          : this.state.tipoSelectedVal === 'Couro' ? 
          <View style={styles.imageFolheadoGalleryView}><Image style={styles.imageFolheadoGallery} source={require('../../../assets/images/leatherIcon.png')}/></View>
          : <Text></Text> }

          </View>
          </View>

          <View style={{alignItems: 'center'}}>

          {this.state.tipoSelectedVal !== 'null'  ?
                <Text style={{fontSize: 20}}>
                      Temos {contagemItensCount} peça(s) de {varSelectedFilter} de {this.state.tipoSelectedVal}
                </Text> : null }
          </View>
        </View>

        <FlatList style={{ marginTop: 15 }}   
      
        
        data={
            this.state.dataSource.filter(dados => 
              {
                return dados.Categoria === varSelectedFilter
                && dados.Folheado === this.state.tipoSelectedVal
          })}       

          renderItem={ renderItem }
          keyExtractor={(item, id) => id.toString()}
          ListEmptyComponent={<EmptyComponent/>}
          />         
      </View>
    );
  }
}

const styles = StyleSheet.create({

  pickerContainer: {
    
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 2,    
    flexDirection: 'column',
    padding: 5,
  },

  pickerHeader: {
    flexDirection: 'row',
    padding: 5,
    alignSelf: 'center',

  },

  imagePecaGallery: {
        
    marginLeft: 100,
    width: 50,
    height: 50,
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 30,

},

imageFolheadoGalleryView: {

  flexDirection: 'row',
  marginLeft: 3
},

imageFolheadoGallery: {

    marginLeft: 100,
    width: 50,
    height: 50,
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 30,

},

      pickerCatStyle: {

        width: 195,    
        color: 'black',
        elevation: 1,
      
      },

      pickerFolhStyle: {

        width: 195,    
        color: 'black',
        elevation: 2,

      },

  MainContainer: {
    

  },

  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 25,
    borderColor: '#CCCC',
    borderWidth: 2,
    marginBottom: 5.5,
    marginLeft: 30,
    marginTop: 7.5,
    alignItems: 'center',
    width: "85%",
    elevation: 15,

  },

  titleContainer: {

    marginLeft: 3,
    marginTop: 5,
    borderRadius: 25,
    width: "90%",


  },

  labelDescr: {
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,

  },

  imageContainer: {
    width: 150,
    paddingBottom: 5,
  },

  imageView: {
    height: 120,
    resizeMode: 'center',
    width: "100%",
    borderRadius: 25,
    marginTop: 5,
    marginLeft: 5,

  },
  emptyContainer: {
    marginTop: 200,
    flexGrow: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyText: {
    fontSize: 30,
    textAlign: 'center',
  }
});