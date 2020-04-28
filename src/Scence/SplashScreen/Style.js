import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
 
let {width,height} = Dimensions.get('window');

export default StyleSheet.create({
    
    Container:{
        flex:1,
        flexDirection:"row",
        paddingStart:width/15,
        paddingEnd:width/15
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

    hello_txt:{
        fontFamily:"san-serif",
        fontWeight:"bold",
        color:"black",
        fontSize:45,
        marginTop:height/20,
    },

    welcome_txt:{
        fontFamily:"san-serif",
        color:"grey",
        fontSize:25,
        marginTop:15,
    },

    main_img:{
        height:height/3,
        width:width,
        marginTop:30,

    },

    continue_btn:{
        marginTop:20,
        borderRadius:5,
        justifyContent:"center",
        height:50
    },

    continue_txt:{
        fontFamily:"san-serif",
        fontWeight:"600",
    },

    bottom_view:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:20
    },

    account_txt:{
        fontFamily:"san-serif",
        fontSize:18
    },
    signUp_txt:{
        fontFamily:"san-serif",
        color:"red",
        fontSize:18,
        textDecorationLine:"underline"
    }
});

