import React, { Component } from 'react'
import { Container, Content, View, Thumbnail, Label } from 'native-base'
import assets from '../../assets/asset'
import style from "./Style"

export class Setting extends Component {
    render() {
        return (
           <Container style={style.container}>
               <Content showsHorizontalScrollIndicator={false}>
                   <View style={style.main_view}>
                        <View style={{flex:1}}>
                               
                                <Thumbnail square style={{height:20,width:13,marginBottom:10}}
                                source={assets.images.Setting.phone}></Thumbnail>

                                <Thumbnail square style={{height:20,width:13,marginBottom:10}}
                                source={assets.images.Setting.phone}></Thumbnail>  

                                <Thumbnail square style={{height:19,width:17,marginBottom:10}}
                                source={assets.images.Setting.privacy}></Thumbnail>

                                <Thumbnail square style={{height:20,width:20,marginBottom:10}}
                                source={assets.images.Setting.delete}></Thumbnail> 

                        </View>
                        
                        <View style={{flex:5}}>
                            <Label style={style.label}>Change Password</Label>
                            <Label style={style.label}>Change Phone</Label>
                            <Label style={style.label}>Privacy Setting</Label> 
                            <Label style={style.label}>Delete Profile</Label>
                        </View>

                        <View style={{flex: 1}}>
                            <Thumbnail square style={style.arrow}
                                source={assets.images.Setting.back}></Thumbnail>
                            <Thumbnail square style={style.arrow}
                                source={assets.images.Setting.back}></Thumbnail>
                            <Thumbnail square style={style.arrow}
                                source={assets.images.Setting.back}></Thumbnail>
                            <Thumbnail square style={style.arrow}
                                source={assets.images.Setting.back}></Thumbnail>
                        </View>
                   </View>
               </Content>
           </Container>
        )
    }
}

export default Setting
