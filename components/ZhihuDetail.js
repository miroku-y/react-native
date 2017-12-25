import React from 'react';
import {View,ListView,Image,Text,ScrollView,RefreshControl} from 'react-native';
import Web from 'react-native-webview2';

const url = "http://news-at.zhihu.com/story/";
// class ZhihuDetail extends React.Component{

// }
class ZhihuDetail extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title:`${navigation.state.params.title}`
    })
    state={
        refreshing:true,
        href:this.props.navigation.state.params.href,
    }
    componentDidMount(){
        console.log(this.props);
        // fetch(url+this.state.id)
        //     .then(response => response.text())
        //     .then(json => {
        //         this.setState({
        //             detail:json
        //         })
        //     })
    }
    // renter(){
    //     return this._renderDetail(this.state.detail);
    // }

    _onRefresh(){
        this.refs.webview.reload();
    }
    _onLoadEnd(){
        this.setState({
            refreshing:false,
        })
    }
    render(){
        return(
            <ScrollView
                style={{flex:1}}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                    />
                }
            >
                <Web
                    source={{uri:this.state.href}}
                    canGoBack={true}
                    ref='webview'
                    onLoadEnd={this._onLoadEnd.bind(this)}
                />
            </ScrollView>
        )
    }
}
export default ZhihuDetail;