import React, { Component } from 'react'
import { Container, Content, View, Text, Radio, Button} from 'native-base'
import style from "./Style"
import assets from "../../assets/asset"

export class DeactivateProfile extends Component {
    render() {
        return (
            <Container style={style.container}>
                <Content>
                    <View>
                        <Text style={style.title}>Deactivating your profile will be disable your profile on all Platform</Text>
                        <View style={style.reason}>
                            <View style={style.row}>
                                <Radio selected={true}
                                    selectedColor={assets.color.theme}
                                    color={assets.color.theme}></Radio>
                                <Text style={style.text}>Found match through this platform</Text>
                            </View>
                            <View style={style.row}>
                                <Radio selected={false}
                                selectedColor={assets.color.theme}
                                color={assets.color.theme}></Radio>
                                <Text style={style.text}>Found match</Text>
                            </View>
                            <View style={style.row}>
                                <Radio selected={false}
                                selectedColor={assets.color.theme}
                                color={assets.color.theme}></Radio>
                                <Text style={style.text}>Not getting suitable profiles</Text>
                            </View>
                            <View style={style.row}>
                                <Radio selected={false}
                                selectedColor={assets.color.theme}
                                color={assets.color.theme}></Radio>
                                <Text style={style.text}>Unhappy with services</Text>
                            </View>
                            <View style={style.row}>
                                <Radio selected={false}
                                selectedColor={assets.color.theme}
                                color={assets.color.theme}></Radio>
                                <Text style={style.text}>Marry Later</Text>
                            </View>
                            <View style={style.row}>
                                <Radio selected={false}
                                selectedColor={assets.color.theme}
                                color={assets.color.theme}></Radio>
                                <Text style={style.text}>Have to make changes to my profile</Text>
                            </View>
                            <View style={style.row}>
                                <Radio selected={false}
                                selectedColor={assets.color.theme}
                                color={assets.color.theme}></Radio>
                                <Text style={style.text}>Harassment by other users</Text>
                            </View>
                            <View style={style.row}>
                                <Radio selected={false}
                                selectedColor={assets.color.theme}
                                color={assets.color.theme}></Radio>
                                <Text style={style.text}>Privacy Issue</Text>
                            </View>
                            <View style={style.row}>
                                <Radio selected={false}
                                selectedColor={assets.color.theme}
                                color={assets.color.theme}></Radio>
                                <Text style={style.text}>Facing Technical Issues</Text>
                            </View>
                            <View style={style.row}>
                                <Radio selected={false}
                                selectedColor={assets.color.theme}
                                color={assets.color.theme}></Radio>
                                <Text style={style.text}>Other</Text>
                            </View>    
                        </View>
                        <Button block 
                        style={style.button}>
                            <Text style={style.btn_text}>Deactivate Account</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default DeactivateProfile
