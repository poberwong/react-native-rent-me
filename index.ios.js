'use strict'
import React from 'react-native'
import Current from './js-core/PersonalCenter.js'
const {
  AppRegistry,
  ListView,
  View,
  Image,
  Text,
  StyleSheet
} = React

class RentMe extends React.Component {

  render () {
    return (
        <Current/>
      )
  }
}

AppRegistry.registerComponent('RentMe', () => RentMe)
