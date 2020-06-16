import React, { Component } from 'react';
import{Container,Content,
    Text, Thumbnail,Input, Button,View,Picker,Icon,Item} from 'native-base';
import assets from '../../assets/asset';
import style from './Style';


export class Login extends Component {

    constructor(props){
        super(props)

        this.state={
            coutry_code:"+91"
        }
    }

    onValueChange(value){
        this.setState({
            coutry_code:value
        })
    }
  

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
                    
                    <Item style={{width:90,borderBottomWidth:2,borderBottomColor:assets.color.grey,marginTop:-6,paddingTop:4}}>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ fontSize:18,width:6}}
                            placeholder="Select your SIM"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.coutry_code}
                            onValueChange={this.onValueChange.bind(this)}
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
                    
                    <Text style={style.password_txt}>
                        {assets.enstring.LoginScreen.password}</Text>
                    
                    <Input secureTextEntry={true} style={style.password_input}
                        placeholder={assets.enstring.LoginScreen.password_placehoder}
                        placeholderTextColor={assets.color.grey}></Input>
                    
                    <Button style={style.login_btn}
                    danger block
                    onPress={()=>this.props.navigation.replace('MatchProfile')}>
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
