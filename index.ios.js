'use strict'
import React from 'react-native'
import Current from './js-core/PersonalCenter'
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
      {Current}
    )
  }
}

const styles = StyleSheet.create({
  
})

AppRegistry.registerComponent("RentMe", () => RentMe);