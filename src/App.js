import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing
} from 'react-native'
/**
 * Implementation
Animated.spring(
  someValue,
  {
    toValue: number,
    friction: number
  }
)
 */

 class App extends Component {
  springValue = new Animated.Value(0.3)
  componentDidMount = () => {
    // this.spring()
  }
  
  spring() {
    this.springValue.setValue(0)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1
      }
    ).start((resp) => console.warn(resp))
  }
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{marginBottom: 100, textAlign: 'center'}}
          onPress={this.spring.bind(this)}
          >
          Spring
        </Text>
        <Animated.Image
          style={{ marginLeft: 40, width: 227, height: 200, transform: [{scale: this.springValue}]}}
          source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
export default App