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
                   
                    <View style={style.toplogo_view}>
                        <Thumbnail square style={style.top_logo}
                        source={assets.images.login.logo}></Thumbnail>
                    </View>

                    <Text style={style.welcome_txt}>
                       {assets.enstring.LoginScreen.welcome}</Text>
                    <Text style={style.signIn_txt}>
                       {assets.enstring.LoginScreen.sign_in_continue}</Text>

                    <Text style={style.mobile_txt}>
                        {assets.enstring.LoginScreen.mobile_no}</Text>
                   
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
                    
                    <Text style={style.password_txt}>
                        {assets.enstring.LoginScreen.password}</Text>
                    
                    <Input secureTextEntry={true} style={style.password_input}
                        placeholder={assets.enstring.LoginScreen.password_placehoder}
                        placeholderTextColor={assets.color.grey}></Input>
                    
                    <Button style={style.login_btn}
                    danger block
                    onPress={()=>this.props.navigation.replace('MyProfile')}>
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
