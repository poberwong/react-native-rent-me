'use strict'
import React from 'react-native'
import Swiper from './swiper.js'

const {
  StyleSheet,
  Dimensions,
  Text,
  View
} = React

let screenWidth = Dimensions.get('window').width // 由pt转为px
export default class HomePage extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      leftFlex: 0,
      colorPosition0: 'red',
      colorPosition1: 'black'
    }
  }

  onScroll (event) {
    let offset = event.nativeEvent.contentOffset.x
    let leftFlex = offset / screenWidth
    let position0 = 'red'
    let position1 = 'black'
    if (leftFlex === 0) {
      position0 = 'red'
      position1 = 'black'
    } else if (leftFlex === 1) {
      position0 = 'black'
      position1 = 'red'
    }

    this.setState({
      leftFlex,
      colorPosition0: position0,
      colorPosition1: position1
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.slidingIndicatorWrapper}>
            <View style={styles.indicatorItems}>
              <View style={styles.indicatorItem}>
                <Text style={{color: this.state.colorPosition0}}>妹子</Text>
              </View>
              <View style={styles.indicatorItem}>
                <Text style={{color: this.state.colorPosition1}}>汉子</Text>
              </View>
            </View>
            <View style={styles.indicatorWrapper}>
              <View style={{flex: this.state.leftFlex}}/>
              <View style={styles.indicator}/>
              <View style={{flex: 1 - this.state.leftFlex}}/>
            </View>
          </View>

          <Swiper
            key='swiper'
            onScroll ={this.onScroll.bind(this)}
            scrollEventThrottle ={10}
            onMomentumScrollEnd ={this._onMomentumScrollEnd}
            loop={false}>

            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
          </Swiper>
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    marginTop: 64,
    backgroundColor: '#eeeeee'
  },
  slidingIndicatorWrapper: {
    height: 40,
    flex: 1
  },
  indicatorItems: {
    flex: 1,
    flexDirection: 'row'
  },
  indicatorItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  indicatorWrapper: {
    flexDirection: 'row',
    height: 2
  },
  indicator: {
    flex: 1,
    backgroundColor: 'red'
  },
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
