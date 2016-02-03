'use strict'
import React from 'react-native'
import NavigationBar from 'react-native-navigationbar'
const {
	Image,
	Text,
  View,
	StyleSheet
} = React

class PersonalCenter extends React.Component {
  render () {
    let backHidden = {isHide: true}
    return (
      <View style={styles.container}>
        <NavigationBar
          title='个人中心'
          backHidden={backHidden.isHide}/>
        <View style={styles.content}>
          <View style={styles.itemHeader}>
            <Image style={styles.avatar} source={{uri: 'https://avatars0.githubusercontent.com/u/8554661?v=3&s=460'}}/>
            <Text style={{marginLeft: 10}}>您好，Pober Wong</Text>
          </View>
          <View style={styles.dividerLine}/>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>雇主资料</Text>
          </View>
          <View style={styles.dividerLine}/>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>我的申请</Text>
          </View>
          <View style={styles.dividerLine}/>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>租我的人</Text>
          </View>
          <View style={styles.dividerLine}/>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>我喜欢的</Text>
          </View>
          <View style={styles.dividerLine}/>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>关于来租我吧</Text>
          </View>
          <View style={styles.dividerLine}/>
        </View>
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
    height: 0.5,
    backgroundColor: '#aaaaaa'
  },
  avatar: {
    height: 44,
    width: 44
  },
  navigationBar: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0
  }
})

module.exports = PersonalCenter
