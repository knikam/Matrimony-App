import React, { Component } from 'react'
import { Container, Content, 
View,
Label,
Thumbnail} from 'native-base'
import style from './Style'
import assets from '../../assets/asset'

export class SideDrawer extends Component {
    render() {
        return (
          <Container>
                    <View style={style.main_view}>
                        
                        <View style={style.left_view}>
                           
                            <View>
                                <Thumbnail circular style={style.left_image}
                                source={assets.images.myprofile.big_image}></Thumbnail>
                                <View style={style.circular_loader}>
                                    <View style={style.progress}>
                                        <Label></Label>
                                    </View>
                                </View>
                                <Label style={style.left_text}>Profile</Label>
                                <Label style={style.left_text}>Completeness</Label>
                            </View>

                            <View style={style.side_bottom}>
                                <Thumbnail square style={{height:19,width:19, marginTop:10}}
                                    source={assets.images.drawer.share}></Thumbnail>

                                <Thumbnail square style={{height:20,width:19,marginTop:20}}
                                    source={assets.images.drawer.setting}></Thumbnail>

                                <Thumbnail square style={{height:19,width:19, marginTop:20}}
                                source={assets.images.drawer.help}></Thumbnail>
                            </View>
                        </View>
                        
                        <View style={style.right_view}>

                            <View style={style.top_view}>
                                <Label style={style.name}>Shruti Marathe</Label>
                                <Label style={style.id}>SM11963SM</Label>
                            </View>
                            <View style={style.line}></View>
                            <View style={style.bottom_view}>
                                <View style={style.row_view}>
                                    <Thumbnail square style={{height:17,width:17}}
                                    source={assets.images.drawer.user}></Thumbnail>
                                    <Label style={style.label}>My Profile</Label>
                                </View>
                                <View style={style.row_view}>
                                    <Thumbnail square style={{height:17,width:17}}
                                    source={assets.images.drawer.user}></Thumbnail>
                                    <Label style={style.label}>Matched Profiles</Label>
                                </View>
                                <View style={style.row_view}>
                                    <Thumbnail square style={{height:17,width:17}}
                                    source={assets.images.drawer.user}></Thumbnail>
                                    <Label style={style.label}>New Profile</Label>
                                </View>
                                <View style={style.row_view}>
                                    <Thumbnail square style={{height:17,width:17}}
                                    source={assets.images.drawer.user}></Thumbnail>
                                    <Label style={style.label}>Shortlisted</Label>
                                </View>
                                <View style={style.row_view}>
                                    <Thumbnail square style={{height:17,width:17}}
                                    source={assets.images.drawer.user}></Thumbnail>
                                    <Label style={style.label}>My Contact</Label>
                                </View>
                                <View style={style.row_view}>
                                    <Thumbnail square style={{height:17,width:17}}
                                    source={assets.images.drawer.user}></Thumbnail>
                                    <Label style={style.label}>Search by profile ID</Label>
                                </View>
                                <View style={style.row_view}>
                                    <Thumbnail square style={{height:17,width:17}}
                                    source={assets.images.drawer.user}></Thumbnail>
                                    <Label style={style.label}>My Plans</Label>
                                </View>

                                <View style={style.center_line}></View>

                                <View style={style.row_view}>
                                    <Thumbnail square style={{height:17,width:17}}
                                    source={assets.images.drawer.user}></Thumbnail>
                                    <Label style={style.label}>Contact Us</Label>
                                </View>
                                <View style={style.row_view}>
                                    <Thumbnail square style={{height:17,width:17}}
                                    source={assets.images.drawer.user}></Thumbnail>
                                    <Label style={style.label}>Rate Us</Label>
                                </View>
                                <View style={style.row_view}>
                                    <Thumbnail square style={{height:17,width:17}}
                                    source={assets.images.drawer.user}></Thumbnail>
                                    <Label style={style.label}>Invite Friends</Label>
                                </View>
                                <View style={style.row_view}>
                                    <Thumbnail square style={{height:17,width:17}}
                                    source={assets.images.drawer.user}></Thumbnail>
                                    <Label style={style.label}>Logout</Label>
                                </View>

                            </View>
                        </View>
                    </View>
          </Container>
        )
    }
}

export default SideDrawer
