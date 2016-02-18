'use strict'
import React from 'react-native'
import NavigationBar from 'react-native-navigationbar'
import Swiper from 'react-native-swiper'

const {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView
} = React

export default class Detail extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <NavigationBar
          title='详情'
          backFunc={() => this.props.navigator.pop()}/>
        <ScrollView>
          <Swiper
          height={500}
          showsButtons = {true}>
            <Image source={{uri: 'http://ww1.sinaimg.cn/large/7a8aed7bgw1f0k67zz05jj20ku0rs0y1.jpg'}} style={styles.avatar}/>
            <Image source={{uri: 'http://ww1.sinaimg.cn/large/7a8aed7bgw1f0k67zz05jj20ku0rs0y1.jpg'}} style={styles.avatar}/>
            <Image source={{uri: 'http://ww1.sinaimg.cn/large/7a8aed7bgw1f0k67zz05jj20ku0rs0y1.jpg'}} style={styles.avatar}/>
          </Swiper>

          <View style={styles.briefInfo}>
            <View style={[styles.itemRow, {marginTop: 5}]}>
              <Text style={[styles.text, {fontWeight: 'bold'}]}>晴晴</Text>
            </View>
            <View style={styles.itemRow}>
              <Text style={styles.text}>陕西 铜川</Text>
              <Text style={[styles.text, {textAlign: 'center'}]}>Kiss</Text>
              <Text style={[styles.text, {color: 'red', textAlign: 'right'}]}>时薪: $250</Text>
            </View>
          </View>

          <Text style={{marginTop: 20, fontSize: 16}}>Ta的资料</Text>
          <View style={{backgroundColor: '#ccc', height: 1}}/>
          <View>
            <View style={[styles.itemRow, {height: 35, paddingLeft: 5, paddingRight: 5, borderBottomWidth: 1, borderColor: '#ccc'}]}>
              <Text style={[styles.text, {flex: 2}]}>年龄</Text>
              <View style={{flex: 3, justifyContent: 'center', height: 35, paddingLeft: 5, borderColor: '#ccc', borderLeftWidth: 1}}>
                <Text >24</Text>
              </View>
            </View>

            <View style={[styles.itemRow, {height: 35, paddingLeft: 5, paddingRight: 5, borderBottomWidth: 1, borderColor: '#ccc'}]}>
              <Text style={[styles.text, {flex: 2}]}>性别</Text>
              <View style={{flex: 3, justifyContent: 'center', height: 35, paddingLeft: 5, borderColor: '#ccc', borderLeftWidth: 1}}>
                <Text style={{fontSize: 16}}>妹子</Text>
              </View>
            </View>

            <View style={[styles.itemRow, {height: 35, paddingLeft: 5, paddingRight: 5, borderBottomWidth: 1, borderColor: '#ccc'}]}>
              <Text style={[styles.text, {flex: 2}]}>性取向</Text>
              <View style={{flex: 3, justifyContent: 'center', height: 35, paddingLeft: 5, borderColor: '#ccc', borderLeftWidth: 1}}>
                <Text style={{fontSize: 16}}>异性恋</Text>
              </View>
            </View>
             <View style={[styles.itemRow, {height: 35, paddingLeft: 5, paddingRight: 5, borderBottomWidth: 1, borderColor: '#ccc'}]}>
              <Text style={[styles.text, {flex: 2}]}>身高</Text>
              <View style={{flex: 3, justifyContent: 'center', height: 35, paddingLeft: 5, borderColor: '#ccc', borderLeftWidth: 1}}>
                <Text style={{fontSize: 16}}>171cm</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15
  },
  itemHeader: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemContainer: {
    height: 55,
    justifyContent: 'center'
  },
  itemText: {
    fontSize: 16,
    color: 'red'
  },
  dividerLine: {
    height: 1,
    backgroundColor: '#aaaaaa'
  },
  avatar: {
    flex: 1,
    borderRadius: 5
  },
  briefInfo: {
    padding: 10,
    borderColor: '#ccc',
    borderBottomWidth: 0.8
  },

  itemRow: {
    height: 25,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: 'black',
    flex: 1
  }
})
