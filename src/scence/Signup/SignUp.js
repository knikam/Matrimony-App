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
                    <Thumbnail square
                    style={style.topLogo}
                    source={assets.images.couple}></Thumbnail>
                    <Text style={style.signup_txt}>
                    {assets.enstring.SignUpScreen.sign_up}</Text>
                    <Text style={style.signupmsg_txt}>
                    {assets.enstring.SignUpScreen.sign_up_msg}</Text>

                    <Text style={style.mobile_txt}>
                        {assets.enstring.SignUpScreen.mobile_number}</Text>
                    <View style={style.input_view}>

                        <Input style={style.code_input}
                            placeholder="+91"
                            placeholderTextColor={assets.color.grey}>
                                <Icon name="md-arrow-down"></Icon>
                            </Input>
                        
                        <Input style={style.mobile_input}
                            placeholder={assets.enstring.SignUpScreen.mobile_placeholder}
                            placeholderTextColor={assets.color.grey}></Input>
                    </View>
                                     

                    <Button style={style.generateopt_btn}
                    danger block>
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
