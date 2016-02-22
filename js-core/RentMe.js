'use strict'
import React from 'react-native'
import NavigationBar from 'react-native-navigationbar'
import Radio, {RadioButton} from 'react-native-simple-radio-button'
const {
  TouchableOpacity,
	Text,
  AlertIOS,
  TextInput,
  View,
  ScrollView,
	StyleSheet
} = React

export default class RentMe extends React.Component {
  render () {
    let backHidden = {isHide: true}
    return (
      <View style={styles.container}>
        <NavigationBar
          title='我要出租'
          backHidden={backHidden.isHide}/>
        <ScrollView style={styles.content}>
          <View style={styles.notice}>
            <Text style={styles.noticeText}>注意: 信息要通过管理员审核上架</Text>
          </View>
          <View style={styles.dividerLine}/>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>  二维码</Text>
            <TouchableOpacity style={styles.barCode}>
              <Text style={{color: 'white'}}>请上传您的微信二维码</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dividerLine}/>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>  姓    名</Text>
            <TextInput
              style={styles.textInput}
              placeholder='请输入您的姓名'
              numberOfLines={1}
              autoFocus={true}
              textAlign='left'/>
          </View>
          <View style={styles.dividerLine}/>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>  手    机</Text>
            <TextInput
              style={styles.textInput}
              placeholder='请输入您的手机号码'
              numberOfLines={1}
              textAlign='left'/>
            <TouchableOpacity style={styles.barCode}>
              <Text style={{color: 'white'}}>发送验证码</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dividerLine}/>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>  验证码</Text>
            <TextInput
              style={styles.textInput}
              placeholder='请输入验证码'
              numberOfLines={1}
              textAlign='left'/>
          </View>
          <View style={styles.dividerLine}/>

          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>  性     别</Text>
            <Radio
              style={{width: 200, alignItems: 'center', marginLeft: 20}}
              radio_props={[{label: '汉子', value: 1}, {label: '妹子', value: 0}]}
              initial={0}
              buttonColor='#2d85f3'
              formHorizontal={true}
              labelHorizontal={true}
              onPress={(value) => {
              }}/>
          </View>
          <View style={styles.dividerLine}/>
          <View style={{flexDirection: 'row', padding: 10}}>
            <Text style={styles.itemText}>性取向 </Text>
            <Radio
              style={{width: 100, alignItems: 'center', marginLeft: 10}}
              radio_props={[{label: '异性恋', value: 0}, {label: '同性恋', value: 1}, {label: '双性恋', value: 2}]}
              initial={0}
              buttonColor='#2d85f3'
              labelHorizontal={true}
              onPress={(value) => {
              }}/>
          </View>
          <View style={styles.dividerLine}/>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>  年    龄</Text>
            <TextInput
              style={styles.textInput}
              placeholder='请输入您的年龄'
              numberOfLines={1}
              autoFocus={true}
              textAlign='left'/>
          </View>
          <View style={styles.dividerLine}/>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>  职    业</Text>
            <TextInput
              style={styles.textInput}
              placeholder='请输入您的职业'
              numberOfLines={1}
              textAlign='left'/>
          </View>
          <View style={styles.dividerLine}/>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>  身    高</Text>
            <TextInput
              style={styles.textInput}
              placeholder='请输入您的身高，单位cm'
              numberOfLines={1}
              autoFocus={true}
              textAlign='left'/>
          </View>

          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>  出租范围</Text>
            <TextInput
              style={styles.textInput}
              placeholder='请选择您的出租范围'
              numberOfLines={1}
              autoFocus={true}
              textAlign='left'/>
          </View>

          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>  定     价</Text>
            <TextInput
              style={styles.textInput}
              placeholder='倒贴钱给雇主'
              numberOfLines={1}
              autoFocus={true}
              textAlign='left'/>
          </View>
          <View style={styles.dividerLine}/>
          <View style={{flexDirection: 'row', padding: 10}}>
            <Text style={styles.itemText}>性取向 </Text>
            <Radio
              style={{width: 230, alignItems: 'center', marginLeft: 10}}
              radio_props={[{label: '赚点租金，反正闲着也是闲着', value: 0}, {label: '想交朋友，有没有租金无所谓', value: 1}]}
              initial={0}
              buttonColor='#2d85f3'
              labelHorizontal={true}
              onPress={(value) => {
              }}/>
          </View>
          <View style={styles.dividerLine}/>
          <View style={{margin: 10}}>
            <View style={{height: 30, justifyContent: 'center', alignItems: 'center'}}>
              <Text>想和雇主来一场怎样的约会</Text>
            </View>
            <TextInput
              style={[styles.textInput, {height: 50}]}
              placeholder='请输入一句话，20字以内'
              maxLength={20}
              numberOfLines={1}
              textAlign='left'/>
          </View>
          <View style={styles.dividerLine}/>
          <View style={{flexDirection: 'row', padding: 10}}>
            <Text style={[styles.itemText, {marginTop: 5}]}>  照片</Text>
            <View>
              <TouchableOpacity style={[styles.barCode, {marginTop: 5, marginBottom: 5, paddingLeft: 50, paddingRight: 50}]}>
                <Text style={{color: 'white'}}>选择第一张照片</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.barCode, {marginTop: 5, marginBottom: 5, paddingLeft: 50, paddingRight: 50}]}>
                <Text style={{color: 'white'}}>选择第二张照片</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.barCode, {marginTop: 5, marginBottom: 5, paddingLeft: 50, paddingRight: 50}]}>
                <Text style={{color: 'white'}}>选择第三张照片</Text>
              </TouchableOpacity>
            </View>           
          </View>
        </ScrollView>
      </View>
      )
  }
  _getGiftedForm () {
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
  notice: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35
  },
  noticeText: {
    fontSize: 14,
    color: '#D66f0b'
  },
  itemHeader: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center'
  },
  barCode: {
    marginLeft: 40,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 3,
    backgroundColor: '#2d85f3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemContainer: {
    height: 55,
    alignItems: 'center',
    flexDirection: 'row'
  },
  itemText: {
    fontSize: 16
  },
  textInput: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    flex: 1
  },
  dividerLine: {
    height: 0.5,
    backgroundColor: '#aaaaaa'
  },
  avatar: {
    height: 44,
    width: 44
  }
})
