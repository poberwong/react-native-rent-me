import React from 'react-native'
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
      <View>
        <Text>Hello React-Native</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
})

AppRegistry.registerComponent("RentMe", () => RentMe);