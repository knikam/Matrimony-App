import React, { Component } from 'react';
import{Container,Content,
    Text, Thumbnail,Input, Button,View} from 'native-base';
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

                    <View style={{flex:.8}}>
                        <Input disabled style={style.code_input}
                            placeholder="+91"
                            placeholderTextColor={assets.color.grey}></Input>
                        <Thumbnail square style={style.code_arrow}
                            source={assets.images.login.arrow}></Thumbnail>
                    </View>

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
