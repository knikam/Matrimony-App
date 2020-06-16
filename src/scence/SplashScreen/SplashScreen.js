
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
                    
                    <View style={style.toplogo_view}>
                    <Thumbnail square style={style.top_logo}
                    source={assets.images.splash.logo}></Thumbnail>
                    </View>

                    <Text style={style.hello_txt}>
                       {assets.enstring.SplashScreen.hello}</Text>
                    <Text style={style.welcome_txt}>
                       {assets.enstring.SplashScreen.welcome}</Text>

                    <Thumbnail square 
                    style={style.main_img}
                    source={assets.images.splash.image}></Thumbnail>

                    <Button style={style.continue_btn} 
                    block onPress={()=>this.props.navigation.replace("Login")}>
                        <Text style={style.continue_txt}>
                            {assets.enstring.SplashScreen.continue_with_mobile}</Text>
                    </Button>
                    <View style={style.bottom_view}>
                        <Text style={style.account_txt}>
                            {assets.enstring.SplashScreen.dont_have_account}</Text>
                        <Text style={style.signUp_txt} 
                        onPress={()=>this.props.navigation.navigate("SignUp")}>
                            {assets.enstring.SplashScreen.sign_up}</Text>
                    </View>
                 </Content>
             </Container>
        );
    }
}

