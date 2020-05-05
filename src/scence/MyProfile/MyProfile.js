import React, { Component } from 'react'
import { Container, Content,
Thumbnail,Tabs,View, Tab, Label} from 'native-base'
import style from './Style';

export class MyProfile extends Component {
    render() {
        return (
            <Container style={style.container}>
                <Content showsVerticalScrollIndicator={false}>
                    <Thumbnail square large source={{url:"https://facebook.github.io/react-native/docs/assets/favicon.png"}} style={style.top_image}/>
                    <View style={style.image_container}>

                    </View>

                    <View style={style.document_status}>

                    </View>

                    <View style={style.tabs}>
                    <Tabs>
                       <Tab heading="Personal"></Tab>
                       <Tab heading="Professional"></Tab>
                       <Tab heading="Documents"></Tab>
                    </Tabs>
                    <View>
                       
                    </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default MyProfile
