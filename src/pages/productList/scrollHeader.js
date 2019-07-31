import React, { Component } from 'react';
import RNScrollable from 'react-native-scrollable-header';
import {
     View,
   Text, 
  
  } from 'react-native';

export default class App extends Component {

  renderExpanded = () => (
    <View style={{ flex: 1, backgroundColor: 'pink', padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 22, alignSelf: 'center' }}>
        Expanded Header
      </Text>
    </View>
  );

  renderCollapsed = () => (
    <View style={{ flex: 1, backgroundColor: 'red', padding: 10, justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 14, alignSelf: 'center' }}>
        Collapsed Header
      </Text>
    </View>
  );


  render() {
    return (
      <RNScrollable 
        content={() => <Text>{}</Text>}
        collapsedHeader={this.renderCollapsed}
        expandedHeader={this.renderExpanded}
        collapsedHeight={60}
        expandedHeight={200}
      />
    );
  }
}