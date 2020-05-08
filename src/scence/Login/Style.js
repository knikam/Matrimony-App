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
    },

    toplogo_view:{
        height:77,
        width:77,
        backgroundColor:assets.color.theme,
        marginTop:50,
        borderRadius:4,
        justifyContent:"center"
    },

    top_logo:{
        height:46,
        width:55,
        alignSelf:"center"
    },

    welcome_txt:{
        fontWeight:"bold",
        color:"black",
        fontSize:30,
        marginTop:height/20,
    },

    signIn_txt:{
        color:assets.color.grey,
        fontSize:18,
        marginTop:15,
    },

    number_view:{
        flex:4,
        flexDirection:"row",
    },

    code_input:{
        flex:1,
        fontSize:18,
        borderBottomWidth:2,
        borderBottomColor:assets.color.grey,
        
    },

    code_arrow:{
        height:7,
        width:8,
        position:"absolute",
        right:7,
        bottom:22

    },

    hr_line:{
        height:33,
        width:1.5,
        marginTop:10,
        backgroundColor:assets.color.grey,
        alignSelf:"center",
        opacity:.8
    },

    mobile_txt:{
        fontSize:15,
        fontWeight:"bold",
        color:assets.color.grey,
        marginTop:40,
    },

    mobile_input:{
        flex:3,
        fontSize:18,
        borderBottomWidth:2,
        borderBottomColor:assets.color.grey,
        paddingLeft:15
    },

    password_txt:{
        fontSize:15,
        fontWeight:"bold",
        color:assets.color.grey,
        marginTop:25,
    },

    password_input:{
        fontSize:18,
        borderBottomWidth:2,
        borderBottomColor:assets.color.grey
    },

    login_btn:{
        backgroundColor:assets.color.theme,
        borderRadius:2,
        marginTop:40,
        height:50
    },

    bottom_view:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:20
    },

    account_txt:{

        fontSize:15
    },
    signUp_txt:{
        color:assets.color.theme,
        fontSize:15,
        textDecorationLine:'underline',
    },

    forgot_txt:{
        fontSize:15,
        marginTop:20,
        alignSelf:"center"
    }

});