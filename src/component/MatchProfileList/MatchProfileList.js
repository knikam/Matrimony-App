import React, { PureComponent } from 'react'
import { View, Label, Thumbnail} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import style from './Style'

export default class MatchProfileList extends PureComponent {
    render() {
        return (
            <View style={style.main_view}>
                <View>
                    <Label style={style.name}>{this.props.data.name}</Label>
                    <View style={style.row_view}>
                        <Icon name="map-marker" size={22} color="#ff0000" style={style.icon,{marginLeft:3,marginTop:10}}></Icon>
                        <Label style={style.info}>{this.props.data.live}</Label>
                    </View>
                    <View style={style.row_view}>
                        <Icon name="graduation-cap" size={16} color="#ff0000"  style={style.icon}></Icon>
                        <Label style={style.info}>{this.props.data.education}</Label>
                    </View>
                    <View style={style.row_view}>
                        <Icon name="briefcase" size={16} color="#ff0000"  style={style.icon}></Icon>
                        <Label style={style.info}>{this.props.data.work}</Label>
                    </View>
                    <View style={style.row_view}>
                        <Icon name="home" size={20} color="#ff0000"  style={style.icon}></Icon>
                        <Label style={style.info}>{this.props.data.native_place}</Label>
                    </View>
                </View>
                <View>
                    <View style={style.row_view}>
                        <Label>{this.props.data.age}</Label>
                        <Label>{this.props.data.height}</Label>
                    </View>
                    <View style={style.profile_img}>
                        <Thumbnail square large style={style.image}
                            source={{uri:"https://1.bp.blogspot.com/-s90Igf6AfVA/XlOsa0eCc7I/AAAAAAAACes/lFSc_wdHOgE0fSM5uJ4_aIMDEoSOXYpFQCLcBGAsYHQ/s640/25-most-beautiful-women-in-india14.jpg"}}></Thumbnail>
                        <View style={style.fav_icon}>
                            <Thumbnail square small
                                source={{uri:"https://png.pngtree.com/png-vector/20190521/ourlarge/pngtree-add-heart-icon-png-image_1056914.jpg"}}></Thumbnail>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
