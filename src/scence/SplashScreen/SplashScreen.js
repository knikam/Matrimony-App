/**
 * Project Name: Matrimony App
 * Module: Splash Screen
 * Author : Kalpesh Nikam
 * Email id : Kalpeshnikam1080@gmail.com
 */

import React,{Component} from 'react';

import{Container,Content,
        Text, Thumbnail, Button,View} from 'native-base';
import assets from '../../assets/asset';
import style from './Style';


export default class SplashScreen extends Component{
    render() {
         return(
             <Container style={style.Container}>
                 <Content showsVerticalScrollIndicator={false}>
                    <Thumbnail square
                    style={style.topLogo}
                    source={assets.images.couple}></Thumbnail>
                    <Text style={style.hello_txt}>
                       {assets.enstring.SplashScreen.hello}</Text>
                    <Text style={style.welcome_txt}>
                       {assets.enstring.SplashScreen.welcome}</Text>
                    <Thumbnail square 
                    style={style.main_img}
                    source={assets.images.marrige}></Thumbnail>
                    <Button style={style.continue_btn} danger
                    block onPress={()=>this.props.navigation.replace("Login")}>
                        <Text style={style.continue_txt}>
                            {assets.enstring.SplashScreen.continue_with_mobile}</Text>
                    </Button>
                    <View style={style.bottom_view}>
                        <Text style={style.account_txt}>
                            {assets.enstring.SplashScreen.dont_have_account}</Text>
                        <Text style={style.signUp_txt}>
                            {assets.enstring.SplashScreen.sign_up}</Text>
                    </View>
                 </Content>
             </Container>
        );
    }
}

