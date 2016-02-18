'use strict'
import React from 'react-native'
import ScrollableTabView from './custom-views/tab-layout/index.js'
import PersonalCenter from './PersonalCenter'
const {
  StyleSheet,
  ListView,
  Text,
  Image,
  View
} = React

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
        <ScrollableTabView
          tabBarPosition='bottom'
          tabBarShowUnderline={false}
          tabBarActiveTextColor='#8799ad'
          tabBarInactiveTextColor='grey'
          tabBarTextSize={16}>
          {this._renderHomePageContent()}
          <PersonalCenter tabLabel='个人中心'/>
        </ScrollableTabView>
      </View>
    )
  }

  _renderHomePageContent () {
    return (
      <View style={styles.homeContainer}
        tabLabel='首页'>
        <ScrollableTabView style={styles.homeContent}
          tabBarUnderlineHeight={2}
          tabBarTextSize={16}
          tabBarUnderlineColor='red'
          tabBarActiveTextColor='red'>
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
        </View>)
  }

  _renderItem () {
    return (
      <View style={styles.itemContainer}>
        <Image source={{uri: 'http://ww1.sinaimg.cn/large/7a8aed7bgw1f0k67zz05jj20ku0rs0y1.jpg'}} style={styles.avatar}/>
        <View>
          <View style={[styles.itemRow, {marginTop: 5}]}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>晴晴</Text>
            <Text style={[styles.text, {textAlign: 'right'}]}>23  天蝎</Text>
          </View>
          <View style={styles.itemRow}>
            <Text style={styles.text}>陕西 铜川</Text>
            <Text style={[styles.text, {textAlign: 'center'}]}>Kiss</Text>
            <Text style={[styles.text, {textAlign: 'right'}]}>160cm</Text>
          </View>
          <View style={styles.itemRow}>
            <Text style={[styles.text]}>职员</Text>
            <Text style={[styles.text, {color: 'red', textAlign: 'right'}]}>时薪: $250</Text>
          </View>
          <View style={[styles.itemRow, {height: 20}]}>
            <Text style={styles.desc}>聊聊人生, 聊聊理想</Text>
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
  homeContainer: {
    flex: 1
  },
  homeContent: {
    marginTop: 64,
    backgroundColor: '#f5fcff'
  },
  text: {
    fontSize: 16,
    color: 'black',
    flex: 1
  },
  desc: {
    fontSize: 14,
    color: 'grey'
  },
  itemContainer: {
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10,
    borderRadius: 3,
    height: 600
  },
  avatar: {
    marginTop: 5,
    flex: 1
  },
  itemRow: {
    height: 25,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})
// module.exports = HomePage
