'use strict'
import React from 'react-native'
import Swiper from './swiper.js'

const {
  StyleSheet,
  Dimensions,
  ListView,
  RefreshControl,
  Text,
  Image,
  View
} = React

let screenWidth = Dimensions.get('window').width // 由pt转为px

export default class HomePage extends React.Component {

  constructor (props) {
    super(props)
    let data = this._getData()
    this.state = {
      leftFlex: 0,
      colorPosition0: 'red',
      colorPosition1: 'black',
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(data), // 先初始化一个空的数据集合
    }
  }

  _getData () {
    let result = []
    for (let i = 0; i < 20; i++) {
      result.push(i)
    }
    return result
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
            onScroll ={this.onScroll.bind(this)}
            scrollEventThrottle ={10}
            onMomentumScrollEnd ={this._onMomentumScrollEnd}
            loop={false}>
            <ListView
              style={{paddingLeft: 10, paddingRight: 10}}
              dataSource={this.state.dataSource}
              renderRow={this._renderItem.bind(this)}/>
            <ListView
              style={{paddingLeft: 10, paddingRight: 10}}
              dataSource={this.state.dataSource}
              renderRow={this._renderItem.bind(this)}/>
          </Swiper>
        </View>
      </View>
    )
  }

  _refresh(){

  }

  _renderItem () {
    return (
      <View style={styles.itemContainer}>
        <Image source={{uri: 'http://ww1.sinaimg.cn/large/7a8aed7bgw1f0k67zz05jj20ku0rs0y1.jpg'}} style={styles.avatar}/>
        <View>
          <View style={styles.itemRow}>
            <Text>Amy</Text>
          </View>
          <View style={styles.itemRow}>
            <Text>Amy</Text>
          </View>
          <View style={styles.itemRow}>
            <Text>Amy</Text>
          </View>
          <View style={styles.itemRow}>
            <Text>Amy</Text>
          </View>
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
    height: 2,
    paddingRight: 10,
    paddingLeft: 10
  },
  indicator: {
    flex: 1,
    backgroundColor: 'red'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  itemContainer: {
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10,
    borderRadius: 3,
    height: 550
  },
  avatar: {
    marginTop: 5,
    flex: 1
  },
  itemRow: {
    height: 20
  }
})
// module.exports = HomePage
