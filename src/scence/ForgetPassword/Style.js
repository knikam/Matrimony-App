import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import assets from '../../assets/asset';
 
let {width,height} = Dimensions.get('window');

export default StyleSheet.create({

    Container:{
        flex:1,
        flexDirection:"row",
        paddingStart:width/15,
        paddingEnd:width/15,
        fontFamily:"san-serif"
    },

    topLogo:{
        height:height/8,
        width:width/3.9,
        backgroundColor:"red",
        marginTop:50,
        borderRadius:5,
        shadowColor:"#000",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        shadowRadius:3.84,
    },

    forgot_txt:{
        fontFamily:"san-serif",
        fontWeight:"bold",
        color:"black",
        fontSize:40,
        marginTop:height/20,
    },

    forgotmsg_txt:{
        fontFamily:"san-serif",
        color:"grey",
        fontSize:25,
        marginTop:15,
    },

    mobile_txt:{
        fontSize:18,
        color:assets.color.grey,
        marginTop:40,
    },

    mobile_input:{
        fontSize:18,
        borderBottomWidth:2,
        borderBottomColor:assets.color.grey
    },

    reset_btn:{
        borderRadius:2,
        marginTop:40,
        height:50
    },

});