'use strict'
import React from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'

const {
  StyleSheet,
  Dimensions,
  ListView,
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
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(data) // 先初始化一个空的数据集合
    }
  }

  _getData () {
    let result = []
    for (let i = 0; i < 20; i++) {
      result.push(i)
    }
    return result
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollableTabView style={{marginTop: 64, backgroundColor: 'eeeeee'}}
          tabBarUnderlineColor='red'
          tabBarActiveTextColor='red'
          >
          <ListView
            tabLabel='妹子'
            style={{paddingLeft: 10, paddingRight: 10}}
            dataSource={this.state.dataSource}
            renderRow={this._renderItem.bind(this)}/>
          <ListView
            tabLabel='汉子'
            style={{paddingLeft: 10, paddingRight: 10}}
            dataSource={this.state.dataSource}
            renderRow={this._renderItem.bind(this)}/>
        </ScrollableTabView>
      </View>
    )
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
