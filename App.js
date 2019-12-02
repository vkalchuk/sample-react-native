import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
// import OpenFile from 'react-native-doc-viewer';
// import Pdf from 'react-native-pdf';
import PDFView from 'react-native-view-pdf';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  url = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf'

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text> */}

        <PDFView
          fadeInDuration={250.0}
          style={{ flex: 1 }}
          resource={this.url}
          resourceType={'url'}
          onLoad={() => console.log(`PDF rendered from ${url}`)}
          onError={(error) => console.log('Cannot render PDF', error)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
