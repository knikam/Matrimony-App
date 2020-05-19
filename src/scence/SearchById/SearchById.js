import React, { Component } from 'react'
import { Container, Content,
Text,Input,Button} from 'native-base'
import style from './Style'
import assets from "../../assets/asset"

export class SearchById extends Component {
    render() {
        return (
            <Container style={style.container}>
                <Content>
                    <Text style={style.Id_txt}>
                           Search by profile ID you know</Text>
                        
                    <Input secureTextEntry={true} style={style.Id_input}
                            placeholder={"Marathe123"}
                            placeholderTextColor={assets.color.grey}></Input>

                    <Button style={style.search_btn}
                        danger block>
                            <Text style={style.login_txt}>
                            Change password</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default SearchById
