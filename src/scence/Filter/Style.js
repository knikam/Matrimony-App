import {StyleSheet,Dimensions} from 'react-native';
import assets from '../../assets/asset'

let {width,height} = Dimensions.get('window');

export default StyleSheet.create({
        
    container:{
        backgroundColor:assets.color.grey
    },

    card:{
        backgroundColor:assets.color.white,
        paddingTop:25,
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:15,
        marginBottom:8,

    },

    head_text:{
        color:assets.color.grey,
        fontSize:15,
    },

    row_view:{
        flexDirection:"row",
        justifyContent:"space-between"
    },

    dash_line:{
        height:2,
        width:18,
        backgroundColor:assets.color.grey,
        alignSelf:"center"
    },

    text:{
        marginTop:15
    },

    picker:{
        width:100
    },

    cast_picker:{
        width:width/1.5
    },

    chips_view:{
        flexDirection:"row",
        flexWrap:"wrap",
        marginTop:15
    }

})