import React, { Component } from 'react'
import { Container, Content, View, Thumbnail, Label } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';
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
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("ChangePassword")}>
                                <Label style={style.label}>Change Password</Label>
                            </TouchableOpacity>
                                <Label style={style.label}>Change Phone</Label>
                                <Label style={style.label}>Privacy Setting</Label> 
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("DeactivateProfile")}>
                                <Label style={style.label}>Delete Profile</Label>
                            </TouchableOpacity>
                        </View>

                        <View style={{flex: 1}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("ChangePassword")}>
                                <Thumbnail square style={style.arrow}
                                    source={assets.images.Setting.back}></Thumbnail>
                            </TouchableOpacity>
                                <Thumbnail square style={style.arrow}
                                    source={assets.images.Setting.back}></Thumbnail>
                                <Thumbnail square style={style.arrow}
                                    source={assets.images.Setting.back}></Thumbnail>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("DeactivateProfile")}>
                                <Thumbnail square style={style.arrow}
                                    source={assets.images.Setting.back}></Thumbnail>
                            </TouchableOpacity>
                        </View>
                   </View>
               </Content>
           </Container>
        )
    }
}

export default Setting
