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
                    <Thumbnail square
                    style={style.topLogo}
                    source={assets.images.couple}></Thumbnail>
                    <Text style={style.forgot_txt}>
                    {assets.enstring.ForgotPasswordScreen.forgot_password}</Text>
                    <Text style={style.forgotmsg_txt}>
                    {assets.enstring.ForgotPasswordScreen.enter_mobile_number}</Text>

                    <Text style={style.mobile_txt}>
                        {assets.enstring.ForgotPasswordScreen.mobile_number}</Text>
                    <Input style={style.mobile_input}
                        placeholder={assets.enstring.ForgotPasswordScreen.mobile_placeholder}
                        placeholderTextColor={assets.color.grey}></Input>

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
