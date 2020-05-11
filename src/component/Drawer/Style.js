import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import assets from '../../assets/asset';
import { transform } from '@babel/core';
 
let {width,height} = Dimensions.get('window');

export default StyleSheet.create({

    main_view:{
        height:height,
        width:width/1.2,
        flexDirection:"row"
    },

    left_view:{
        height:height,
        width:width/4.5,
        backgroundColor:"#eae8e8",
        justifyContent:"space-between"
    },

    right_view:{
        height:height,
        width:width/1.5,
        backgroundColor:assets.color.white,
    },

    side_bottom:{
        alignItems:"center",
        marginBottom:20
    },

    left_image:{
        height:60,
        width:60,
        borderWidth:2,
        borderColor:assets.color.theme,
       alignSelf:"center",
       margin:10
    },

    circular_loader:{
        height:60,
        width:60,
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        borderColor:assets.color.white,
        borderWidth:3,
        borderRadius:30
    },  

    progress:{
        height:60,
        width:60,
        alignSelf:"center",
        position:"absolute",
        borderWidth:3,
        borderRadius:30,
        borderLeftColor: 'transparent',
        borderBottomColor: assets.color.theme,
        borderRightColor: assets.color.theme,
        borderTopColor: assets.color.theme,  
    },  

    left_text:{
        fontSize:10,
        alignSelf:"center",
    },

    top_view:{
        margin:20
    },

    name:{
        fontSize:20,
        fontWeight:"700",    
    },

    id:{
        fontSize:15,
        color:assets.color.grey,
        marginTop:5
    },

    line:{
        height:1.5,
        width:width/1.5,
        backgroundColor:assets.color.grey,
        marginLeft:10,
        marginRight:10,
        opacity:.4
    }

})