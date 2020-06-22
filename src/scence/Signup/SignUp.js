import React, { Component } from 'react';
import{Container,Content,
    Text, Thumbnail,Input, Button,View, Icon,Item,Picker} from 'native-base';
import assets from '../../assets/asset';
import style from './Style'

export class SignUp extends Component {
    
    constructor(props){
        super(props)

        this.state={
            
            coutry_code:"+91",
            mobileNo:""
        }
    }

    onValueChange(value){
        this.setState({
            coutry_code:value
        });
    }

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
                                     

                    <Button style={style.generateopt_btn}
                    danger block
                    onPress={()=>this.onSignUp()}>
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
