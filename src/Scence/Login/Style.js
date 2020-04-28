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

    welcome_txt:{
        fontFamily:"san-serif",
        fontWeight:"bold",
        color:"black",
        fontSize:40,
        marginTop:height/20,
    },

    signIn_txt:{
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

    password_txt:{
        fontSize:18,
        color:assets.color.grey,
        marginTop:25,
    },

    password_input:{
        fontSize:18,
        borderBottomWidth:2,
        borderBottomColor:assets.color.grey
    },

    login_btn:{
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

        fontSize:18
    },
    signUp_txt:{
        color:"red",
        fontSize:18,
        textDecorationLine:'underline',
    },

    forgot_txt:{
        fontSize:18,
        marginTop:20,
        alignSelf:"center"
    }

});