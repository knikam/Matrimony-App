import React, { Component } from 'react'
import { View } from 'native-base'
import MyProfileList from '../../component/MatchProfileList/MatchProfileList'
import { ScrollView } from 'react-native';

let profile = {
    name:"Samantha Rathod",
    age:"26",
    height:"5'4",
    cast:"96 kuli maratha",
    live:"Pune Maharastra",
    education:"Computer Science",
    work:"UI/UX Developer",
    native_place:"Sholapur"
};

export class MatchProfile extends Component {

    render() {
        return (
           <ScrollView>
               <MyProfileList data={profile}></MyProfileList>
                <MyProfileList data={profile}></MyProfileList>
                <MyProfileList data={profile}></MyProfileList>
                <MyProfileList data={profile}></MyProfileList>
                <MyProfileList data={profile}></MyProfileList>
           </ScrollView>
        )
    }
}

export default MatchProfile
