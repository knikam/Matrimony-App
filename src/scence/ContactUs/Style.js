import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import assets from '../../assets/asset';
 
let {width,height} = Dimensions.get('window');

export default StyleSheet.create({

    container:{
        backgroundColor:assets.color.white
    },

    content:{
        marginLeft:20,
        marginTop:40,
        marginRight:20
    },

    label:{
        fontSize:15,
        fontWeight:"500",
        color:assets.color.grey,
        marginLeft:5
    },

    message_input:{
        fontSize:18,
        borderBottomWidth:2,
        borderBottomColor:assets.color.grey,
        marginTop:20
    },

    label_bottom:{
        textAlign:"right",
        fontSize:10,
        fontWeight:"500",
        color:assets.color.grey,
        marginLeft:5,
        marginTop:10
    },

    send_btn:{
        backgroundColor:assets.color.theme,
        marginTop:25
    },

    icon:{
        height:17,
        width:17,
        marginTop:2
    },

    contact_label:{
        fontSize:15,
        marginLeft:15,
        color:"#006df0",
    }


})