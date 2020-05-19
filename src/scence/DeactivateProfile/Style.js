import {StyleSheet,Dimensions} from 'react-native'
import assets from "../../assets/asset"

let{width,height} = Dimensions.get("window")

export default StyleSheet.create({

    container:{
        padding:20,
    },

    title:{
        fontSize:18,
        color:assets.color.grey, 
    },

    reason:{
        marginTop:20,
        
    },

    row:{
        flexDirection:"row",
        marginBottom:5
    },

    text:{
        marginLeft:10,
        fontSize:15,
        alignSelf:"center"
    },

    button:{
        backgroundColor:assets.color.theme,
        borderRadius:3,
        height:50,
        marginTop:40
    }



})