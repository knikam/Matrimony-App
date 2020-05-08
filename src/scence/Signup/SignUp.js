import React, { Component } from 'react';
import{Container,Content,
    Text, Thumbnail,Input, Button,View, Icon,} from 'native-base';
import assets from '../../assets/asset';
import style from './Style'

export class SignUp extends Component {
    render() {
        return (
            <Container style={style.Container}>
                <Content showsVerticalScrollIndicator={false}>
                    <View style={style.toplogo_view}>
                        <Thumbnail square style={style.top_logo}
                        source={assets.images.login.logo}></Thumbnail>
                    </View>
                    
                    <Text style={style.signup_txt}>
                    {assets.enstring.SignUpScreen.sign_up}</Text>
                    <Text style={style.signupmsg_txt}>
                    {assets.enstring.SignUpScreen.sign_up_msg}</Text>

                    <Text style={style.mobile_txt}>
                        {assets.enstring.SignUpScreen.mobile_number}</Text>
                        
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
                                     

                    <Button style={style.generateopt_btn}
                    danger block
                    onPress={()=>this.props.navigation.navigate('VerifyNumber')}>
                        <Text style={style.generateopt_txt}>
                            {assets.enstring.SignUpScreen.generate_otp}</Text>
                    </Button>

                    <View style={style.bottom_view}>
                        <Text style={style.account_txt}>
                            {assets.enstring.SignUpScreen.have_account}</Text>
                        <Text style={style.signin_txt}
                        onPress={()=>this.props.navigation.navigate('Login')}>
                            {assets.enstring.SignUpScreen.sign_in}</Text>
                    </View>

                </Content>
            </Container>
        )
    }
}

export default SignUp
