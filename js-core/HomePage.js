'use strict'
import React from 'react-native'
import Swiper from 'react-native-swiper'

const {
  StyleSheet,
  Text,
  View
} = React

export default class HomePage extends React.Component{
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
        <View style={styles.slidingIndicatorWrapper}>

        </View>

        <Swiper style={styles.wrapper}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
        </Swiper>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10
  },
  slidingIndicatorWrapper: {
    height: 40,
    flex: 1
  }
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
// module.exports = HomePage
