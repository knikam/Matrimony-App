import React, { Component } from 'react'
import { Container, Content, View,
    Label, Input, Button, Text, Thumbnail} from 'native-base'
import assets from '../../assets/asset'
import style from './Style'

export class ContactUs extends Component {
    render() {
        return (
           <Container style={style.container}>
               <Content showsHorizontalScrollIndicator={false}>
                   <View style={style.content}>
                        <Label style={style.label}>Enter your message</Label>
                        <Input style={style.message_input} 
                                placeholder="Have a something to share"
                                placeholderTextColor={assets.color.grey}></Input>
                            <Text style={style.label_bottom}>No morr than 100 character</Text>
                            <Button style={style.send_btn}
                            danger block>
                                <Text style={style.reset_txt}>
                                    Send</Text>
                            </Button>
                            <View style={{flexDirection:"row",marginTop:30}}>
                                <Thumbnail square style={style.icon}
                                    source={assets.images.contact_us.phone}></Thumbnail>
                                <Label style={style.contact_label}>9898989898</Label>
                            </View>

                            <View style={{flexDirection:"row",marginTop:10}}>
                                <Thumbnail square style={style.icon}
                                    source={assets.images.contact_us.phone}></Thumbnail>
                                <Label  style={style.contact_label}>support@matrimony.com</Label>
                            </View>
                   </View>
               </Content>
           </Container>
        )
    }
}

export default ContactUs
