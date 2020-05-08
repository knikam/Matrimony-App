import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import assets from '../../assets/asset';
 
let {width,height} = Dimensions.get('window');

export default StyleSheet.create({
    
    Container:{
        flex:1,
        flexDirection:"row",
        paddingStart:width/15,
        paddingEnd:width/15
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

    hello_txt:{
        fontWeight:"bold",
        color:assets.color.black,
        fontSize:30,
        marginTop:height/16,
    },

    welcome_txt:{
        color:assets.color.grey,
        fontSize:18,
        letterSpacing:.2,
        marginTop:15,
    },

    main_img:{
        height:height/4.5,
        width:width/1.6,
        marginTop:30,
        alignSelf:"center"

    },

    continue_btn:{
        backgroundColor:assets.color.theme,
        marginTop:40,
        borderRadius:5,
        justifyContent:"center",
        height:50
    },

    continue_txt:{
        fontWeight:"600",
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
        fontFamily:"san-serif",
        color:assets.color.theme,
        fontSize:15,
        textDecorationLine:"underline"
    }
});

