import React, { Component } from 'react'
import { Container, Content, 
View,
Label,
Thumbnail} from 'native-base'
import style from './Style'
import assets from '../../assets/asset'
import { TouchableOpacity } from 'react-native-gesture-handler';

export class SideDrawer extends Component {

    constructor(){
        super();
        
        this.state={
            expand:false,
        }
    }

    onPressExpand(){
        this.setState({
            expand:!this.state.expand,
        })
    }

    render() {
        return (
          <Container style={style.container}>
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

                                <TouchableOpacity onPress={()=>this.props.navigation.replace("Setting")}>
                                    <Thumbnail square style={{height:20,width:19,marginTop:20}}
                                        source={assets.images.drawer.setting}></Thumbnail>
                                </TouchableOpacity>

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
                                    <TouchableOpacity onPress={()=>this.props.navigation.replace("MyProfile")}>
                                        <Label style={style.label}>My Profile</Label>
                                    </TouchableOpacity>
                                </View>
                                <View style={style.row_view}>
                                    <Thumbnail square style={{height:17,width:17}}
                                    source={assets.images.drawer.user}></Thumbnail>
                                    <TouchableOpacity onPress={()=>this.props.navigation.goBack(null)}>
                                       <Label style={style.label}>Matched Profiles</Label>
                                    </TouchableOpacity>
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
                                <TouchableOpacity style={style.row_view} onPress={()=>this.onPressExpand()}>
                                    <Thumbnail square style={{height:17,width:17}}
                                    source={assets.images.drawer.user}></Thumbnail>
                                    <Label style={style.label}>My Contact</Label>
                                    <Thumbnail square style={{height:6,width:10,marginLeft:30,justifyContent:"flex-end",marginTop:8}}
                                    source={assets.images.drawer.arrow_down}></Thumbnail>
                                </TouchableOpacity>
                               
                                {this.state.expand?
                                <View style={{marginLeft:20}}>
                                    <View style={style.row_view}>
                                        <Thumbnail square style={{height:17,width:17}}
                                        source={assets.images.drawer.user}></Thumbnail>
                                        <Label style={style.label}>9049609747</Label>
                                    </View>

                                    <View style={style.row_view}>
                                        <Thumbnail square style={{height:17,width:17}}
                                        source={assets.images.drawer.user}></Thumbnail>
                                        <Label style={style.label}>Kalpeshnikam@gmail.com</Label>
                                    </View>
                                </View>:null}

                                <View style={style.row_view}>
                                    <Thumbnail square style={{height:17,width:17}}
                                    source={assets.images.drawer.user}></Thumbnail>
                                    <TouchableOpacity onPress={()=>this.props.navigation.replace("SearchById")}>
                                        <Label style={style.label}>Search by profile ID</Label>
                                    </TouchableOpacity>
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
                                     <TouchableOpacity onPress={()=>this.props.navigation.replace("ContactUs")}>
                                    <Label style={style.label}>Contact Us</Label>
                                    </TouchableOpacity>
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
