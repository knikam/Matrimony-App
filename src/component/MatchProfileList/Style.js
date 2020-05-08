import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import assets from '../../assets/asset';
 
let {width,height} = Dimensions.get('window');

export default StyleSheet.create({

    main_view:{
        backgroundColor:assets.color.white,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop:14,
        paddingRight:10,
        paddingLeft: 10,
        paddingBottom:8,
        marginBottom:5
    },

    row_view:{
        flexDirection:"row",
        alignContent:"space-around",
    },

    name:{
        fontFamily:assets.font.poppins_medium,
        color:assets.color.black,
        fontWeight:"bold",
        fontSize:16,
        marginLeft:5,
        letterSpacing:.3
    },

    icon:{
       height:15,
       width:18,
       marginTop:10,
    },

    info:{
        fontFamily:assets.font.poppins_Regular,
        color:assets.color.grey,
        marginLeft:12,
        marginTop:9,
        fontSize:14,
    },

    side_info:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginBottom:1,

    },

    hr_line:{
        height: 13,
        width: 1,
        backgroundColor: 'grey',
        marginTop:3
    },
    side:{
        color:"red",
        fontSize:15,
        marginRight:5
    },

    profile_img:{
        marginTop:8
    },

    image:{
        height:height/5,
        width:width/2.6,
        borderRadius:4,
    },
    fav_icon:{ 
        position: "absolute",
        backgroundColor:assets.color.theme,
        width: 35,
        height: 35,
        bottom:0,
        right:0,
        borderRadius:4,
    }
    
})