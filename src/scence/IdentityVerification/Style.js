import {StyleSheet,Dimensions} from 'react-native';
import assets from '../../assets/asset'

let {width,height} = Math.round(Dimensions.get('window'));

export default StyleSheet.create({

    Container:{
        padding:20
    },

    aadhar_txt:{
        fontSize:15,
        color:"black"
    },

    upload_image:{
        height:35,
        width:35,
        alignSelf:"center"
    },

    front_txt:{
        marginTop:15,
        fontSize:15
    },

    front_view:{
        height:120,
        marginTop:10,
        justifyContent:"center",
        borderColor:"black",
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:1
    },

    back_txt:{
        marginTop:25,
        fontSize:15
    },

    back_view:{
        height:120,
        marginTop:10,
        justifyContent:"center",
        borderColor:"black",
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:1,
    },

    scan_txt:{
        fontSize:15,
        color:"black",
        alignSelf:"center"
    },

    biodata_txt:{

    },

    footer_view:{
        flex:2,
        flexDirection:"row",
        marginTop:30
        
    },

    skip_btn:{
        flex:1,
        height:50,
        justifyContent:"center",
        
    },

    continue_btn:{
        flex:1,
        height:50,
        backgroundColor:"red",
        marginStart:15,
        justifyContent:"center"
    }

});