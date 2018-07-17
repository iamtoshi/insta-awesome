import React, { Component } from 'react'
import {
   View,
   WebView,
   StyleSheet
} 
from 'react-native'

const WebViewExample = function () {
   return (
      <View style = {styles.container}>
         <WebView
            source = {{ uri: 
               'https://www.youtube.com/watch?v=2RX-EDLGB8Q' }}
         />
      </View>
   )
}
export default WebViewExample;

const styles = StyleSheet.create({
   container: {
      height: 350,
   }
})