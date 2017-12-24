import React from 'react';
import {View,Text,ListView,styleSheet, RefreshControl, TouchableHighlight,Image,navigator} from 'react-native';
import Moment from 'moment';
import ZhihuDetail from './ZhihuDetail';

const url = 'http://news-at.zhihu.com/api/4/news/before/';
const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});
const ONEDAY = 20*60*60*1000;
const pageNo = Moment(new Date().getTime() + ONEDAY).format('YYYYMMDD');

class ZhihuDaily extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title:`${navigation.state.params.name}`
    })
    state={
        refreshing:true,
        loadMore:false,
        name:this.props.name,
        pageNo:pageNo,
        dataSource:[],
    }
    componentDidMount(){
        this._fetchData();
        console.log(navigator);
    }
    _fetchData(){
        fetch(url + pageNo)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    refreshing: false,
                    loadMore: false,
                    dataSource: this.state.pageNo === 1 ? json.stories : this.state.dataSource.concat(json.stories)
                })
            })
            .catch(error => console.log(error));
    }
    _renderRow(rowData){
        console.log(rowData);
        return(
            <TouchableHighlight
                underlayColor="#008b8b"
               
            >
                <View>
                    <Text style={{fontSize:20,flex:1}}>{rowData.title}</Text>
                    <Image
                        style={{width:100,height:80}}
                        source={{uri:rowData.images[0]}}
                    />
                </View>
            </TouchableHighlight>
        )
    }
    _onEndReached(){
        if (this.state.dataSource.length === 0) return;
        this.setState({
            loadMore: true,
            pageNo: Moment(new Date(Moment(this.state.pageNo)).getTime() - ONEDAY).format('YYYYMMDD')
        }, () => this._fetchData())
    }
    _onPress(rowId){
        this.props.navigator.push({
            component:ZhihuDetail,
            params:{
                item:rowId
            }
        })
    }
    render(){
        return (
            <ListView
                refreshControl = {
                    <RefreshControl
                        refreshing = {this.state.refreshing}

                    />
                }
                dataSource={ds.cloneWithRows(this.state.dataSource)}
                // dataSource={this.state.dataSource}
                // renderRow={this._renderRow.bind(this, rowData)}
                renderRow={(rowData) =>
                        {
                            return (
                                <TouchableHighlight
                                    // style={styles.rowStyle}
                                    underlayColor='#008b8b'
                                // onPress={() => this._onPress(rowData.name)}
                                    onPress={()=> this._onPress(rowData.id)}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ width: 100, height: 80, borderRadius: 4 }} source={{ uri: rowData.images[0] }} />
                                        <Text>{rowData.title}</Text>
                                    </View>
                                </TouchableHighlight>
                            )
                        }
                    }
                enableEmptySections={true}
                onEndReachedThreshold={10}
                onEndReached={this._onEndReached.bind(this)}
            />
        )
    }
}

export default ZhihuDaily;