import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import assets from '../../assets/asset';
 
let {width,height} = Dimensions.get('window');

export default StyleSheet.create({

    main_view:{
        backgroundColor:assets.color.white,
        flexDirection:"row",
        justifyContent:"space-between",
        padding: 10,

    },
    row_view:{
        flexDirection:"row",
        alignContent:"space-around",
    },
    name:{
        color:assets.color.black,
        fontSize:18,
        fontWeight:"bold",
        marginLeft:5,
        letterSpacing:.5
    },

    info:{
        color:assets.color.grey,
        marginLeft:12,
        marginTop:11,
        fontSize:14,
    },

    icon:{
        marginTop:10,
    },

    profile_img:{
        marginTop:5
    },
    image:{
        height:height/5,
        width:width/2.5,
       borderRadius:10
        
    },
    fav_icon:{
        
        position: "absolute",
        width: 25,
        height: 25,
        bottom:11,
        right:11,
        borderRadius:10
    }
    
})