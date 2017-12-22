import React from 'react';
import {Image,ListView,TouchableHighlight,StyleSheet,View,Text} from 'react-native';

const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});


class One extends React.Component{
    state = {
        dataSource:ds.cloneWithRows([
            {
                name: 'CNodeJS',
                logo: require('../images/cnode.png')
            }, {
                name: '开源中国',
                logo: require('../images/oschina.png')
            }, {
                name: '开发者头条',
                logo: require('../images/toutiaoio.png')
            }, {
                name: '推酷',
                logo: require('../images/tuicool.png')
            }, {
                name: 'SegmentFault',
                logo: require('../images/segmentfault.png')
            }, {
                name: '知乎日报',
                logo: require('../images/zhihudaily.png')
            }, {
                name: '掘金',
                logo: require('../images/juejin.png')
            }, {
                name: '36氪',
                logo: require('../images/36kr.jpeg')
            }
        ])
    }
    _onPress(rowData) {
      const {navigate} = this.props.navigation;
      console.log(rowData);
      switch (rowData){
        case "CNodeJS" :
            navigate('CNodeJS', {
                name: rowData,
            });
            break;
        case "开源中国" :
            navigate('OSChina', {
                name: rowData,
            });
            break;
        case "开发者头条":
            navigate('TouTiao', {
                name: rowData,
            });
            break;
        case "推酷":
            navigate('TuiCool', {
                name: rowData,
            });
            break;
        case "SegmentFault":
            navigate('SegmentFault', {
                name: rowData,
            });
            break;
        case "知乎日报":
            navigate('ZhihuDaily', {
                name: rowData,
            });
            break;
        case "掘金":
            navigate('JueJin', {
                name: rowData,
            });
            break;
        case "36氪":
            navigate('Kr36', {
                name: rowData,
            });
            break;
      }
    }
    render(){
      console.log(this);
        return <ListView
            style={styles.listView}
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <TouchableHighlight
                  style={styles.rowStyle}
                  underlayColor='#008b8b'
                  onPress={() => this._onPress(rowData.name)}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image style={{width: 30, height: 30, borderRadius: 4}} source={rowData.logo}/>
                  <Text style={styles.rowText}>{rowData.name}</Text>
                  </View>
              </TouchableHighlight>}
        />
    }
}
export default One;
const styles = StyleSheet.create({
    listView: {
      backgroundColor: '#eee',
    },
    rowText: {
      marginLeft: 10,
      fontSize: 18,
      flex: 1,
    },
    rowStyle: {
      backgroundColor: '#FFFFFF',
      padding: 10,
      marginBottom: 1,
    },
  })