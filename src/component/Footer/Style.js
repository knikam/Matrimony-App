import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import assets from '../../assets/asset';
 
let {width,height} = Dimensions.get('window');

export default StyleSheet.create({

    footer:{
        flexDirection:"row",
        justifyContent:"space-between",
        height:height/12,
        width:width,
        backgroundColor:assets.color.white,
        elevation:5,
        paddingTop:8,
        paddingLeft:20,
        paddingRight:20
    },

    logo:{
        height:20,
        width:20,
        alignSelf:"center",
        marginBottom:3
    },

    label:{
        fontSize:16,
        color:assets.color.grey,
    }
})