'use strict'
import React from 'react-native'
import ScrollableTabView from './custom-views/tab-layout/index.js'
import PersonalCenter from './PersonalCenter.js'
import RentMe from './RentMe.js'
import Detail from './Detail.js'
const {
  StyleSheet,
  ListView,
  Text,
  TouchableOpacity,
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
          <RentMe tabLabel='我要出租'/>
          <PersonalCenter tabLabel='个人中心'/>
        </ScrollableTabView>
      </View>
    )
  }

  _renderHomePageContent () {
    return (
      <View style={styles.homeContainer}
        tabLabel='首页'>
        {this._getHeader()}
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
      <TouchableOpacity style={{marginTop: 10}}
        activeOpacity= {0.7}
        onPress={this._goToDetail}>
        <View style={styles.itemContainer}>
          <Image source={{uri: 'http://ww1.sinaimg.cn/large/7a8aed7bgw1f0k67zz05jj20ku0rs0y1.jpg'}} style={styles.avatar}/>
          <View>
            <View style={[styles.itemRow, {marginTop: 5}]}>
              <Text style={[styles.text, {fontWeight: 'bold'}]}>晴晴</Text>
              <Text style={[styles.text, {textAlign: 'right'}]}>23  天蝎</Text>
            </View>
            <View style={styles.itemRow}>
              <Text style={styles.text}>天堂</Text>
              <Text style={[styles.text, {textAlign: 'center'}]}>Kiss</Text>
              <Text style={[styles.text, {textAlign: 'right'}]}>160cm</Text>
            </View>
            <View style={styles.itemRow}>
              <Text style={[styles.text]}>天使</Text>
              <Text style={[styles.text, {color: 'red', textAlign: 'right'}]}>时薪: $250</Text>
            </View>
            <View style={[styles.itemRow, {height: 20}]}>
              <Text style={styles.desc}>对，我就是那个250，约么？</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      )
  }

  _goToDetail = () => {
    this.props.navigator.push({
      component: Detail,
      passProps: {hello: 'world'}
    })
  };

  _getHeader () {
    return (
      <View style={styles.header}>
        <TouchableOpacity style={{height: 40, width: 60, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 16}}>Loca</Text>
        </TouchableOpacity>
        <View style={{flex: 1, borderRadius: 10, margin: 6, borderWidth: 1, borderColor: 'grey', justifyContent: 'center', paddingLeft: 10}}>
          <Text style={{color: 'grey'}}>点击搜索妹纸吧</Text>
        </View>
        <TouchableOpacity style={{height: 40, width: 60, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 16}}>Filter</Text>
        </TouchableOpacity>
      </View>)
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  homeContainer: {
    flex: 1
  },
  header: {
    marginTop: 24,
    height: 40,
    flexDirection: 'row'
  },
  homeContent: {
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
