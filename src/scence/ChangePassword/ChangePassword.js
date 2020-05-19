import React, { Component } from 'react'
import { Container, Content, View, Text, Input, Button} from 'native-base'
import style from "./Style"
import assets from "../../assets/asset"

export class ChangePassword extends Component {
    render() {
        return (
            <Container style={style.container}>
                <Content>
                    <View style={style.main_view}>
                        <Text style={style.password_txt}>
                            Existing Password</Text>
                        
                        <Input secureTextEntry={true} style={style.password_input}
                            placeholder={"Enter old password"}
                            placeholderTextColor={assets.color.grey}></Input>

                        <Text style={style.password_txt}>
                            New Password</Text>
                        
                        <Input secureTextEntry={true} style={style.password_input}
                            placeholder={"Enter new password"}
                            placeholderTextColor={assets.color.grey}></Input>
                        
                        <Text style={style.password_txt}>
                           Old Password</Text>
                        
                        <Input secureTextEntry={true} style={style.password_input}
                            placeholder={"Enter confirm password"}
                            placeholderTextColor={assets.color.grey}></Input>

                        <Button style={style.change_password_btn}
                        danger block>
                            <Text style={style.login_txt}>
                            Change password</Text>
                        </Button>
                        
                    </View>
                </Content>
            </Container>
        )
    }
}

export default ChangePassword
