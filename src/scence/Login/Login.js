import React, { Component } from 'react';
import{Container,Content,
    Text, Thumbnail,Input, Button,View} from 'native-base';
import assets from '../../assets/asset';
import style from './Style';


export class Login extends Component {
    render() {
        return (
            <Container style={style.Container}>
                <Content showsVerticalScrollIndicator={false}>
                    <Thumbnail square
                    style={style.topLogo}
                    source={assets.images.couple}></Thumbnail>
                    <Text style={style.welcome_txt}>
                       {assets.enstring.LoginScreen.welcome}</Text>
                    <Text style={style.signIn_txt}>
                       {assets.enstring.LoginScreen.sign_in_continue}</Text>

                    <Text style={style.mobile_txt}>
                        {assets.enstring.LoginScreen.mobile_no}</Text>
                    <Input style={style.mobile_input}
                        placeholder={assets.enstring.LoginScreen.mobile_placeholder}
                        placeholderTextColor={assets.color.grey}></Input>
                    <Text style={style.password_txt}>
                        {assets.enstring.LoginScreen.password}</Text>
                    <Input style={style.password_input}
                        placeholder={assets.enstring.LoginScreen.mobile_placeholder}
                        placeholderTextColor={assets.color.grey}></Input>
                    <Button style={style.login_btn}
                    danger block
                    onPress={()=>this.props.navigation.navigate('VerifyNumber')}>
                        <Text style={style.login_txt}>
                            {assets.enstring.LoginScreen.login}</Text>
                    </Button>
                    <View style={style.bottom_view}>
                        <Text style={style.account_txt}>
                            {assets.enstring.SplashScreen.dont_have_account}</Text>
                        <Text style={style.signUp_txt}
                        onPress={()=>this.props.navigation.navigate('SignUp')}>
                            {assets.enstring.SplashScreen.sign_up}</Text>
                    </View>
                    <Text style={style.forgot_txt}
                    onPress={()=>this.props.navigation.navigate('ForgotPassword')}>
                        {assets.enstring.LoginScreen.forget_password}</Text>
                </Content>
            </Container>
        )
    }
}

export default Login
