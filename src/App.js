import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing
} from 'react-native'
class App extends Component {
  animatedValue= new Animated.Value(0) 
  componentDidMount() {
    this.animate()
  }
  animate() {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }
  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0,1],
      outputRange: [0,300]
    })
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1 ,0]
    })
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0]
    })
    const textSize = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 32, 18]
    })
    const rotateX = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg']
    })
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            marginLeft,
            height: 30,
            width: 40,
            backgroundColor: 'red'}}
        />
        <Animated.View
          style={{
            opacity,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: 'blue'}} />
        <Animated.View
          style={{
            marginLeft: movingMargin,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: 'orange'}} />
        <Animated.Text
          style={{
            fontSize: textSize,
            marginTop: 10,
            color: 'green'}} >
            Animated Text!
      </Animated.Text>
      <Animated.View
        style={{
          transform: [{rotateX}],
          marginTop: 50,
          height: 30,
          width: 40,
          backgroundColor: 'black'}}>
        <Text style={{color: 'white'}}>Hello from TransformX</Text>
      </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App
