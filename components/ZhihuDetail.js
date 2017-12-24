import React from 'react';
import {View,ListView,Image,Text} from 'react-native';

const url = "http://news-at.zhihu.com/story/";
// class ZhihuDetail extends React.Component{

// }
class ZhihuDetail extends React.Component{
    state={
        id:this.props.item,
        detail:null
    }
    componentDidMount(){
        fetch(url+this.state.id)
            .then(response => response.text())
            .then(json => {
                this.setState({
                    detail:json
                })
            })
    }
    renter(){
        return this._renderDetail(this.state.detail);
    }

    _renderDetail(detail){
        renter(
            <View>{detail}</View>
        )
    }
}
export default ZhihuDetail;