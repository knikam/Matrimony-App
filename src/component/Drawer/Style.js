import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import assets from '../../assets/asset';
 
let {width,height} = Dimensions.get('window');

export default StyleSheet.create({

    container:{
        backgroundColor:"#ffffff"
    },

    main_view:{
        height:height,
        width:width/1.2,
        flexDirection:"row",
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
        marginTop:5
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
        marginRight:15,
        opacity:.2
    },

    row_view:{
        marginTop:20,
        marginLeft:15,
        flexDirection:"row"
    },

    label:{
        color:"grey",
        fontSize:15,
        marginLeft:15,
    },

    center_line:{
        height:1.5,
        width:width/1.5,
        backgroundColor:assets.color.grey,
        marginTop:15,
        marginRight:15,
        opacity:.2
    }, 
})