import React, { Component } from 'react'
import { View } from 'native-base'
import MyProfileList from '../../component/MatchProfileList/MatchProfileList'

let profile = {
    name:"Samantha Rathod",
    age:"26",
    height:"5'4",
    cast:"96 kuli maratha",
    live:"Pune Maharastra",
    education:"Computer Sci.",
    work:"UI/UX Developer",
    native_place:"Sholapur"
};

export class MatchProfile extends Component {

    render() {
        return (
            <View>
                <MyProfileList data={profile}></MyProfileList>
            </View>
        )
    }
}

export default MatchProfile
