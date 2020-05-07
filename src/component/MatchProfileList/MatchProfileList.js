import React, { PureComponent } from 'react'
import { View, Label, Thumbnail} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import style from './Style'
import assets from '../../assets/asset'

export default class MatchProfileList extends PureComponent {
    render() {
        return (
            <View style={style.main_view}>
                <View>
                    <Label style={style.name}>{this.props.data.name}</Label>
                    <View style={style.row_view}>
                        <View style={{marginTop:20}}>
                            <Thumbnail square source={assets.images.matchprofile.address}
                                style={{height:15,width:15,marginTop:18,}}></Thumbnail>
                            <Thumbnail square source={assets.images.matchprofile.education}
                                style={{height:10,width:13,marginTop:13,}}></Thumbnail>
                            <Thumbnail square source={assets.images.matchprofile.work}
                                style={{height:11,width:13,marginTop:13,}}></Thumbnail>
                            <Thumbnail square source={assets.images.matchprofile.live}
                                style={{height:14,width:11,marginTop:15,}}></Thumbnail>
                        </View>

                        <View>
                            <Label style={style.info}>{this.props.data.cast}</Label>
                            <Label style={style.info}>{this.props.data.live}</Label>
                            <Label style={style.info}>{this.props.data.education}</Label>
                            <Label style={style.info}>{this.props.data.work}</Label>
                            <Label style={style.info}>{this.props.data.native_place}</Label>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={style.side_info}>
                        <View style={style.row_view}>
                        <Label style={style.side}>{this.props.data.age}</Label>
                        <Label style={style.side}>Years</Label>
                        </View>
                        <View style={style.hr_line}></View>
                        <View style={style.row_view}>
                        <Label style={style.side}>{this.props.data.height}</Label>
                        <Label style={style.side}>ft</Label>
                        </View>
                        <Thumbnail square source={assets.images.matchprofile.heart}
                                style={{height:18,width:20,marginTop:1,}}></Thumbnail>
                    </View>
                    <View style={style.profile_img}>
                        <View style={style.image_view}>
                        <Thumbnail square large style={style.image}
                            source={assets.images.matchprofile.image}></Thumbnail>
                        </View>
                        <View style={style.fav_icon}>
                            {/* <Thumbnail square small
                                source={{uri:"https://png.pngtree.com/png-vector/20190521/ourlarge/pngtree-add-heart-icon-png-image_1056914.jpg"}}></Thumbnail> */}
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
