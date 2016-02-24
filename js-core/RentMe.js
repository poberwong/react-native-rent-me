'use strict'
import React from 'react-native'
import NavigationBar from 'react-native-navigationbar'
import Radio from 'react-native-simple-radio-button'
const {
  TouchableOpacity,
	Text,
  Picker,
  TextInput,
  View,
  Animated,
  ScrollView,
	StyleSheet
} = React

export default class RentMe extends React.Component {
  state={
    animatedValue: new Animated.Value(0),
    selectedItem: '请选择',
    pickerData: ['请选择'],
    salary: '请选择',
    city: '请选择',
    constellation: '请选择',
    isToggled: false
  };

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
              style={styles.radio0}
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
              style={styles.radio1}
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
            <Text style={styles.itemText}>  收    入</Text>
              <TouchableOpacity style={[styles.barCode, styles.pickerTrigger]}
                onPress={() => this._toggle(['请选择', '5000元以下', '5000 ~ 10000元', '10000 ~ 20000元', '200000元以上'], 0)}>
              <Text>{this.state.salary}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dividerLine}/>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>  城    市</Text>
              <TouchableOpacity style={[styles.barCode, styles.pickerTrigger]}
                onPress={() => this._toggle(['请选择', '北 京', '上 海', '广 州', '深 圳', '天 津'], 1)}>
              <Text>{this.state.city}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dividerLine}/>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>  星    座</Text>
              <TouchableOpacity style={[styles.barCode, styles.pickerTrigger]}
                onPress={() => this._toggle(['请选择', '天 蝎', '摩 羯', '巨 蟹', '处 女', '天 秤', '双 子', '双 鱼', '金 牛', '射 手', '水 萍', '双 鱼', '白 羊'], 2)}>
              <Text>{this.state.constellation}</Text>
            </TouchableOpacity>
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
          <View style={styles.dividerLine}/>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>  出租范围</Text>
            <TextInput
              style={styles.textInput}
              placeholder='请选择您的出租范围'
              numberOfLines={1}
              autoFocus={true}
              textAlign='left'/>
          </View>
          <View style={styles.dividerLine}/>
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
            <Text style={styles.itemText}>出租目的 </Text>
            <Radio
              style={styles.radio2}
              radio_props={[{label: '赚点租金，反正闲着也是闲着', value: 0}, {label: '想交朋友，有没有租金无所谓', value: 1}]}
              initial={0}
              buttonColor='#2d85f3'
              labelHorizontal={true}
              onPress={(value) => {
              }}/>
          </View>
          <View style={styles.dividerLine}/>
          <View style={{margin: 10}}>
            <View style={styles.meeting}>
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
            <View style={{flex: 1}}>
              <TouchableOpacity style={[styles.barCode, styles.choosePic]}>
                <Text style={{color: 'white'}}>选择第一张照片</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.barCode, styles.choosePic1, {marginTop: 5}]}>
                <Text style={{color: 'white'}}>选择第二张照片</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.barCode, styles.choosePic1]}>
                <Text style={{color: 'white'}}>选择第三张照片</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        {this._getPicker(this.state.pickerData)}
        {
          this.state.isToggled
          ? <TouchableOpacity activeOpacity={1} style={styles.nullView}
          onPress={() => this._hidePicker(false)}/>
          : null
        }
      </View>
      )
  }

  _getPicker (data) { // 对象数组
    return (
      <Animated.View
        style={[styles.picker, {
          transform: [{
            translateY: this.state.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [220, 0]  // 0 : 150, 0.5 : 75, 1 : 0
            })
          }]}
        ]}>
        <View style={{height: 30}}>
          <TouchableOpacity style={[styles.pickerButton, {left: 15}]}
            onPress={() => this._hidePicker(false)}>
            <Text style={{fontSize: 16}}>Cancle</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.pickerButton}
            onPress={() => this._hidePicker(true)}>
            <Text style={{fontSize: 16}}>Done</Text>
          </TouchableOpacity>
        </View>
        <Picker
          selectedValue={this.state.selectedItem}
          onValueChange={(selectedItem) => { this.setState({selectedItem}) }}>
          {this._genItems(data)}
        </Picker>
      </Animated.View>
    )
  }

  _genItems (data) { // {key: 'ooo', value: 'xxx'}
    return data.map((itemData, index) => <Picker.Item key={index} label={itemData} value={itemData} />)
  }

  _toggle (data, activedItem) {
    this.activedItem = activedItem

    this.setState({
      isToggled: true, // 判断是否消隐遮盖视图。最好将该步骤写到动画完成之后。且不能和是否加载Picker 共用一个变量
      pickerData: data
    })
    Animated.timing(
      this.state.animatedValue,
      {
        toValue: 1,
        duration: 400
      }
    ).start()
  }

  _hidePicker = (isSelected) => {
    Animated.timing(
      this.state.animatedValue,
      {
        toValue: 0,
        duration: 500
      }
    ).start(() => {
      switch (this.activedItem) {
        case 0: {
          this.setState({
            isToggled: false,
            salary : isSelected ? this.state.selectedItem : this.state.salary
          })
        } break
        case 1: {
          this.setState({
            isToggled: false,
            city : isSelected ? this.state.selectedItem : this.state.city
          })
        } break
        case 2: {
          this.setState({
            isToggled: false,
            constellation : isSelected ? this.state.selectedItem : this.state.constellation
          })
        }
      }
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  nullView: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 220,
    position: 'absolute',
    backgroundColor: 'transparent'
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
  radio0: {
    width: 200,
    alignItems: 'center',
    marginLeft: 20
  },
  radio1: {
    width: 100,
    alignItems: 'center',
    marginLeft: 5
  },
  radio2: {
    width: 230,
    alignItems: 'center',
    marginLeft: 10
  },
  meeting: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pickerTrigger: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey'
  },
  pickerButton: {
    position: 'absolute',
    right: 15,
    bottom: 0
  },
  choosePic: {
    borderWidth: 1,
    borderColor: 'grey'
  },
  choosePic1: {
    marginBottom: 5,
    paddingLeft: 50,
    paddingRight: 50
  },
  itemHeader: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center'
  },
  barCode: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
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
  picker: {
    height: 220,
    backgroundColor: '#f5fcff',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
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
