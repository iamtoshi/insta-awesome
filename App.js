import React from 'react';
import { StyleSheet, Text, View, Image, PanResponder } from 'react-native';
import ModalExample from './Modal';
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        console.log("touched touched");
        this.refs.modalOpen.setModalVisible(true);
        
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        console.log("hey I moved");
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }

  render() {
    return (
      <View style={styles.container} >
        <Image resizeMode={'cover'} 
         style={{ width: '95%'}}source={require('./gif/newgif.gif')} />
         <Image source={require('./gif/up.png')} style={styles.upButton} {...this._panResponder.panHandlers}/>
         <Image source={require('./gif/plus1.png')} style={styles.plusButton}/>
        <ModalExample ref='modalOpen' />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
    position:'relative'
  },
  upButton: {
    width:50,
    height:50,
    position:'absolute',
    bottom:10
  },
  plusButton: {
    width:40,
    height:40,
    position:'absolute',
    top:30,
    left:'85%'
  }
});
