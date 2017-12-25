/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Image,AppRegistry} from 'react-native';
// import Icon from "react-native-vector-icons/FontAwesome";
import { TabNavigator,StackNavigator } from 'react-navigation';
import One from './components/one';
import User from './components/user';

import CNodeJS from './components/CNodeJS';
import JueJin from './components/JueJin';
import Kr36 from './components/Kr36';
import OSChina from './components/OSChina';
import SegmentFault from './components/SegmentFault';
import TouTiao from './components/TouTiao';
import TuiCool from './components/TuiCool';
import ZhihuDaily from './components/ZhihuDaily';
import ZhihuDetail from './components/ZhihuDetail';
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

//创建屏幕下方导航栏
const Tab = TabNavigator(
  {
    home:{
      screen:One,
      navigationOptions:{
        tabBarLabel:'IT资讯',
        tabBarIcon:({tintColor}) => (
          <Image 
            source={require('./images/home.png')}
            style={[{height:24,width:24},{tintColor:tintColor}]}
          />
        )
      }
    },
    my:{
      screen:User,
      navigationOptions:{
        tabBarLabel:'我的',
        tabBarIcon:({tintColor}) => (
          <Image
            source={require('./images/user.png')}
            style={[{height:24,width:24},{tintColor:tintColor}]}
          />
        )
      }
    }
  },
  {
    // tabBarComponent:TabBarBottom,
    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: true,
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性
    tabBarOptions: {
      //Android属性
      upperCaseLabel: false,//是否使标签大写，默认为true
      //共有属性
      showIcon: true,//是否显示图标，默认关闭
      showLabel: true,//是否显示label，默认开启
      activeTintColor: '#EB3695',//label和icon的前景色 活跃状态下（选中）
      inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
      style: { //TabNavigator 的背景颜色
          backgroundColor: 'white',
          height: 55,
      },
      indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
          height: 0,
      },
      labelStyle: {//文字的样式
          fontSize: 13,
          marginTop: -5,
          marginBottom: 5,
      },
      iconStyle: {//图标的样式
          marginBottom: 5,
      }
    },
  }
);

export default App = StackNavigator({
    ITTab: {screen:Tab},
    CNodeJS: {screen:CNodeJS},
    JueJin: {screen:JueJin},
    Kr36: {screen:Kr36},
    OSChina: {screen:OSChina},
    SegmentFault: {screen:SegmentFault},
    TouTiao: {screen:TouTiao},
    TuiCool: {screen:TuiCool},
    ZhihuDaily: {screen:ZhihuDaily},
    ZhihuDetail: { screen: ZhihuDetail}
});
// export default class App extends Component<{}> {
//   render() {
//     return (
//       <View>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
