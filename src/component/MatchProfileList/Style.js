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
        color:assets.color.black,
        fontSize:16,
        fontWeight:"400",
        marginLeft:5,
        letterSpacing:.5
    },

    icon:{
        marginTop:7,
    },

    info:{
        color:assets.color.grey,
        marginLeft:12,
        marginTop:9,
        fontSize:13,
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
        fontSize:14,
        marginRight:5
    },
    profile_img:{
        marginTop:8
    },
    image_view:{
        borderRightColor:"grey",
        borderWidth:.5,
        borderRadius:8
    },
    image:{
        height:height/5,
        width:width/2.7,
        borderRadius:8,
    },
    fav_icon:{ 
        shadowRadius:8,
        position: "absolute",
        width: 22,
        height: 22,
        bottom:15,
        right:15,
        borderRadius:8,
        backgroundColor:"red"
    }
    
})