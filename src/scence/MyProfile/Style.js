import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import assets from '../../assets/asset';
 
let {width,height} = Dimensions.get('window');

export default StyleSheet.create({

    container:{
        flex:1,
    },

    top_image:{
        height:height/5,
        width:width/3,
        alignSelf:"center",
        marginTop:5,
        borderRadius:8,
    },

    image_gallary:{
        flexDirection:"row",
        marginTop:5,
        padding:5
    },

    upload:{
        height:height/8,
        width:width/4,
        borderRadius:4,
        marginRight:8,
        marginLeft:3,
        padding:5,
        backgroundColor:"#e6d9d9",
        flex:1,
        justifyContent:"center",
    },

    gallary:{
        height:height/8,
        width:width/4,
        borderRadius:4,
        marginRight:8
    },

    document_status:{

    },

    tabs:{
        margin:4
    },

    label_view:{
        flex:1,
        backgroundColor:"#fa575b",
        padding:10,
        marginTop:2,
        borderRadius:2
    },

    top_label:{
        alignSelf:"center",
        fontSize:18,
        color:"white",
        fontWeight:"bold"
    },

    info:{
        flex:5,     
        flexDirection:"row",
        marginLeft:20,
        marginRight:10
    },

    fix:{
        fontSize:18,
        color:"grey",
        marginTop:10
    },
    
    var:{
        fontSize:18,
        color:assets.color.black,
        marginTop:10
    },

    professional:{
        marginTop:20
    },

    fix_label:{
        marginTop:10,
        color:"gray",
        flex:2
    },

    var_label:{
        marginTop:10,
        flex:3
    },

    documents:{
        marginTop:20
    }
});