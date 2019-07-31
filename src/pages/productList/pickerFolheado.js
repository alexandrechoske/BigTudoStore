import * as React from 'react'
import { Alert, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import {
  CustomPicker,
  FieldTemplateSettings,
  OptionTemplateSettings,
  CustomPickerActions
} from 'react-native-custom-picker'


export class PickerFolheado extends React.Component {
  render() {
    const options = [
      {
        color: 'gold',
        label: 'Dourado - Peças mergulhadas 12x no ouro',
        value: 'Dourado',
      },
      {
        color: 'silver',
        label: 'Prata - Peças mergulhadas 12x na prata',
        value: 'Prata'
      },
      {
        color: 'brown',
        label: 'Couro',
        value: 'Couro'
      }
    ]

    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <CustomPicker
          placeholder={'Clique aqui para filtro tipo de material'}
          options={options}
          getLabel={item => item.label}
          fieldTemplate={this.renderField}
          optionTemplate={this.renderOption}
          headerTemplate={this.renderHeader}
          footerTemplate={this.renderFooter}
          onValueChange={value => {
            Alert.alert('Selected Item', value ? JSON.stringify(value) : 'No item were selected!')
          }}
        />
      </View>
    )
  }

  renderHeader() {
    return (
      <View style={styles.headerFooterContainer}>
        <Text>Seleção de Tipo do Material</Text>
      </View>
    )
  }

  
  renderField(settings) {
    const { selectedItem, defaultText, getLabel, clear } = settings
    return (
      <View style={styles.container}>
        <View>
          {!selectedItem && <Text style={[styles.text, { color: 'grey' }]}>{defaultText}</Text>}
          {selectedItem && (
            <View style={styles.innerContainer}>
              <TouchableOpacity style={styles.clearButton} onPress={clear}>
                <Text style={{ color: '#fff' }}>Clear</Text>
              </TouchableOpacity>
              <Text style={[styles.text, { color: selectedItem.color }]}>
                {getLabel(selectedItem)}
              </Text>
            </View>
          )}
        </View>
      </View>
    )
  }

  renderOption(settings) {
    const { item, getLabel } = settings
    return (
      <View style={styles.optionContainer}>
        <View style={styles.innerContainer}>
          <View style={[styles.box, { backgroundColor: item.color }]} />
          <Text style={{ color: item.color, alignSelf: 'flex-start' }}>{getLabel(item)}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 15,
    backgroundColor: 'lightgray',

  },

  innerContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',

  },

  text: {
    fontSize: 15,
  },

  headerFooterContainer: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'lightgray',
    
  },

  clearButton: { 
    backgroundColor: 'grey', 
    borderRadius: 5, 
    marginRight: 10, 
    padding: 5 
},

  optionContainer: {
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    
  },

  optionInnerContainer: {
    flex: 1,
    flexDirection: 'row',

  },

  box: {
    width: 25,
    height: 25,
    marginRight: 10,
  }
})

export default PickerFolheado;