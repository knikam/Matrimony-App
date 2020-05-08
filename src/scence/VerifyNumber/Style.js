import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import assets from '../../assets/asset'
 
let {width,height} = Dimensions.get('window');

export default StyleSheet.create({

    Container:{
        flex:1,
        flexDirection:"row",
        paddingStart:width/15,
        paddingEnd:width/15
    },

    title:{
        fontFamily:"san-serif",
        color:"grey",
        fontSize:18,
        marginTop:height/20
    },

    code_input:{
        flex: 1,
        flexDirection:"row",
        marginTop:5
    },

    input:{
        flex: 1,
        fontSize:18,
        borderBottomWidth:2,
        borderBottomColor:assets.color.grey,
        marginEnd:12
    },

    verifyopt_btn:{
        backgroundColor:assets.color.theme,
        borderRadius:2,
        marginTop:40,
        height:50
    },

    verify_txt:{
        fontSize:15
    },

    not_receive_txt:{
        alignSelf:"center",
        fontFamily:"san-serif",
        color:"grey",
        fontSize:15,
        marginTop:height/15

    },

    resend_txt:{
        alignSelf:"center",
        fontFamily:"san-serif",
        color:"red",
        fontSize:18,
        marginTop:15
    }
});