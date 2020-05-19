import {StyleSheet} from "react-native"
import {Dimensions} from "react-native"
import assets from '../../assets/asset'

export default StyleSheet.create({

    container:{
        backgroundColor:assets.color.white,
        padding:15
    },

    main_view:{
        flex:7,
        flexDirection:"row",
        marginTop:15
    },

    arrow:{
        height:14,
        width:8,
        alignSelf:"center",
        marginBottom:14,
        marginTop:2
    },

    label:{
        fontSize:15,
        color:assets.color.grey,
        marginBottom:12
    }

    



})