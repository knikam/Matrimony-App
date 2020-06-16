import React, { Component } from 'react';
import{Container,Content,
    Text, Thumbnail,Input, Button,View,Item,Icon,Picker} from 'native-base';
import assets from '../../assets/asset';
import style from './Style';

export class ForgetPassword extends Component {
    render() {
        return (
            <Container style={style.Container}>
                <Content showsVerticalScrollIndicator={false}>
                    
                    <View style={style.toplogo_view}>
                        <Thumbnail square style={style.top_logo}
                        source={assets.images.login.logo}></Thumbnail>
                    </View>
                    <Text style={style.forgot_txt}>
                    {assets.enstring.ForgotPasswordScreen.forgot_password}</Text>
                    <Text style={style.forgotmsg_txt}>
                    {assets.enstring.ForgotPasswordScreen.enter_mobile_number}</Text>

                    <Text style={style.mobile_txt}>
                        {assets.enstring.ForgotPasswordScreen.mobile_number}</Text>
                        <View style={style.number_view}>

                    <Item style={{width:90,borderBottomWidth:2,borderBottomColor:assets.color.grey,marginTop:-6,paddingTop:4}}>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ fontSize:18,width:6}}
                            placeholder="Select your SIM"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            // selectedValue={this.state.profile_for}
                            // onValueChange={this.onValueChange.bind(this)}
                            >

                            <Picker.Item label="+91" value="+91" />
                            <Picker.Item label="+92" value="+92" />

                        </Picker>
                    </Item>

                    <View style={style.hr_line}></View>

                    <Input style={style.mobile_input}
                        placeholder={assets.enstring.LoginScreen.mobile_placeholder}
                        placeholderTextColor={assets.color.grey}></Input>
                    </View>

                    <Button style={style.reset_btn}
                    danger block>
                        <Text style={style.reset_txt}>
                            {assets.enstring.ForgotPasswordScreen.password_reset}</Text>
                    </Button>

                </Content>
            </Container>
        )
    }
}

export default ForgetPassword
