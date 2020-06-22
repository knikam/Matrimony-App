import React, { Component } from 'react'
import { Container, Content,
Thumbnail,Tabs,View, Tab, Label,Header,Left,Right,Button,Icon,Body,Title} from 'native-base'
import style from './Style';
import assets from '../../assets/asset';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '../../component/Footer/Footer';


export class MyProfile extends Component {
    render() {
        return (
            <Container style={style.container}>
                <Header style={{backgroundColor:assets.color.theme}}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>HomeScreen</Title>
                    </Body>
                    <Right />
                </Header>
                
                <Content showsVerticalScrollIndicator={false}>
                    <Thumbnail square large source={assets.images.myprofile.big_image} style={style.top_image}/>
                    
                        <ScrollView horizontal style={style.image_gallary} showsHorizontalScrollIndicator={false}> 
                            <View style={style.upload}>
                            <Thumbnail square source={assets.images.myprofile.camera} style={{height:12,width:15, alignSelf:"center"}}/>
                            </View>
                            <Thumbnail square source={assets.images.myprofile.big_image} style={style.gallary}/>
                            <Thumbnail square source={assets.images.myprofile.big_image} style={style.gallary}/>
                            <Thumbnail square source={assets.images.myprofile.big_image} style={style.gallary}/>
                            <Thumbnail square source={assets.images.myprofile.big_image} style={style.gallary}/>
                        </ScrollView>

                    <View style={style.document_status}>

                    </View>

                    <View style={style.tabs}>

                        <View style={style.personal}>
                            <View style={style.label_view}>
                                <Label style={style.top_label}>Personal</Label>
                            </View>
                            <View style={style.info}>
                                <View style={{flex:2}}> 
                                    <Label style={style.fix}>Name</Label>
                                    <Label style={style.fix}>Gender</Label>
                                    <Label style={style.fix}>Height</Label>
                                    <Label style={style.fix}>Blood Group</Label>
                                    <Label style={style.fix}>Birthdate</Label>
                                </View>
                                <View style={{flex:3}}>
                                    <Label style={style.var}>Shruti Marathe</Label>
                                    <Label style={style.var}>Female</Label>
                                    <Label style={style.var}>5"4 ft</Label>
                                    <Label style={style.var}>A++</Label>
                                    <Label style={style.var}>25 June 1991</Label>
                                </View>
                            </View>
                        </View>
                        <View style={style.professional}>
                            <View style={style.label_view}>
                                <Label style={style.top_label}>Professional</Label>
                            </View>
                            <View>
                                <View style={style.info}>
                                    <Label style={style.fix_label}>Languages</Label>
                                    <Label style={style.var_label}>Marathi, Hindi, English, Tamil</Label>
                                </View>
                                <View style={style.info}>
                                    <Label style={style.fix_label}>Education Qualifications.</Label>
                                    <Label style={style.var_label}>Msc In Computer Science</Label>
                                </View>
                                <View style={style.info}>
                                    <Label style={style.fix_label}>Employment Record</Label>
                                    <Label style={style.var_label}>Associate Professor 2018 to-Wards, School, Warje - Pune Lecture in computer science Government College - Warje Pune</Label>
                                </View>
                            </View>
                        </View>
                        <View style={style.documents}>
                            <View style={style.label_view}>
                                <Label style={style.top_label}>Documents</Label>
                            </View>
                        </View>
                    </View>
                </Content>
                <Footer></Footer>
            </Container>
        )
    }
}

export default MyProfile