import React, { Component } from 'react'
import {View, Thumbnail, Label} from 'native-base'
import style from './Style'
import assets from '../../assets/asset'

export class Footer extends Component {
    render() {
        return (
            <View style={style.footer}>
                <View>
                    <Thumbnail square source={assets.images.footer.call} 
                    style={style.logo}></Thumbnail>
                    <Label style={style.label}>Call</Label>
                </View>
                <View>
                    <Thumbnail square source={assets.images.footer.whatsapp} 
                    style={style.logo}></Thumbnail>
                    <Label style={style.label}>What's App</Label>
                </View>
                <View>
                    <Thumbnail square source={assets.images.footer.intrest} 
                    style={style.logo}></Thumbnail>
                    <Label style={style.label}>Send Interest</Label>
                </View>
                <View>
                    <Thumbnail square source={assets.images.footer.astrology} 
                    style={style.logo}></Thumbnail>
                    <Label style={style.label}>Astrology</Label>
                </View>
            </View>
        )
    }
}

export default Footer
