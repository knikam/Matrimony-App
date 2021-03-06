import {Component} from "react"
import {StyleSheet} from "react-native"
import {Dimensions} from "react-native"
import assets from "../../assets/asset"

let{width,height} = Dimensions.get("window");

export default StyleSheet.create({

    container:{
        paddingLeft:20,
        paddingRight:20
    },

    Id_txt:{
        fontSize:15,
        fontWeight:"bold",
        color:assets.color.grey,
        marginTop:25,
    },

    Id_input:{
        fontSize:18,
        borderBottomWidth:2,
        borderBottomColor:assets.color.grey
    },

    search_btn:{
        backgroundColor:assets.color.theme,
        borderRadius:2,
        marginTop:40,
        height:50
    },
})