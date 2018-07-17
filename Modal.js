import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, WebView, Image} from 'react-native';
import WebViewExample from './WebView';

export default class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
      let _uri1 = 'https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0';
      let _uri2 = 'https://www.youtube.com/watch?v=iBRN1mxtYHQ';
      console.log("state", this.state.modalVisible);
    return (
      <View style={{marginTop: 22, backgroundColor: '#232323'}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={{marginTop: 22, backgroundColor: '#232323'}}>
            <View>
              <TouchableHighlight
                onPress={() => {
                    console.log("I am getting closed");
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Image style={{height:40, width:40}}source={require('./gif/close.png')}/>
              </TouchableHighlight>
              
           
            <WebViewExample
                style={{height: 100, width: 100}}
                javaScriptEnabled={true}
                source={{uri: _uri1}}
            /> 
             </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Swipe Up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}