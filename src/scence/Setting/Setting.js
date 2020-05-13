import React, { Component } from 'react'
import { Container, Content, View, Thumbnail, Label } from 'native-base'
import assets from '../../assets/asset'

export class Setting extends Component {
    render() {
        return (
           <Container>
               <Content showsHorizontalScrollIndicator={false}>
                   <View>
                        <View style={{flexDirection:"row"}}>
                            <Thumbnail square
                            source={assets.images.Setting.phone}></Thumbnail>
                            <Label>Change Password</Label>
                            <Thumbnail square
                            source={assets.images.Setting.back}></Thumbnail>
                        </View>
                   </View>
               </Content>
           </Container>
        )
    }
}

export default Setting
