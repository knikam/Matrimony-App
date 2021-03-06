/**
 * Project Name: Matrimony App
 * Module: Splash Screen
 * Author : Kalpesh Nikam
 * Email id : Kalpeshnikam1080@gmail.com
 */

import React,{Component} from 'react';

import{Container,Content,
        Text, Thumbnail, Button,View, Input} from 'native-base';
import assets from '../../assets/asset';
import style from './Style';

export class VerifyNumber extends Component {
    render() {
        return (
            <Container style={style.Container}>
                <Content showsVerticalScrollIndicator={false}>
                    <Text style={style.title}>
                        {assets.enstring.VerificationScreen.title}
                    </Text>

                    <View style={style.code_input}>
                        <Input style={style.input}></Input>
                        <Input style={style.input}></Input>
                        <Input style={style.input}></Input>
                        <Input style={style.input}></Input>
                        <Input style={style.input}></Input>
                    </View>

                    <Button style={style.verifyopt_btn}
                    danger block
                    onPress={()=>this.props.navigation.navigate('VerifyNumber')}>
                        <Text style={style.verify_txt}>
                            {assets.enstring.VerificationScreen.verify}</Text>
                    </Button>

                    <Text style={style.not_receive_txt}
                    >{assets.enstring.VerificationScreen.code_not_receive}</Text>

                    <Text style={style.resend_txt}
                        onPress={()=>this.props.navigation.navigate('SignUp_Detail')}
                     >{assets.enstring.VerificationScreen.resend}</Text>

                </Content>
            </Container>
        )
    }
}

export default VerifyNumber
