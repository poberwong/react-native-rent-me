'use strict'
import React from 'react-native'
import HomePage from './js-core/HomePage.js'
const {
  AppRegistry,
  Navigator
} = React

class RentMe extends React.Component {

  render () {
    return (
      <Navigator style = {{flex: 1}}
        initialRoute={{
          component: HomePage
        }}
        renderScene={(route, navigator) => { // 用来渲染navigator栈顶的route里的component页面
          // route={component: xxx, name: xxx, ...}， navigator.......route 用来在对应界面获取其他键值
          return <route.component navigator={navigator} {...route} {...route.passProps}/>// {...route.passProps}即就是把passProps里的键值对全部以给属性赋值的方式展开 如：test={10}
        }
      }/>
      )
  }
}

AppRegistry.registerComponent('RentMe', () => RentMe)
