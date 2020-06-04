import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import assets from '../../assets/asset';
import { Picker } from 'native-base';

let {width,height} = Dimensions.get('window');

export default StyleSheet.create({

    container:{
        padding:50
    },

    label:{
        color:assets.color.grey,
        fontSize:14,
        marginLeft:15,
        marginTop:10
    },
    picker:{
        marginLeft:15,
        marginRight:15,
        borderBottomColor:assets.color.grey
    },

    input:{
        fontSize:18,
        marginLeft:15,
        marginRight:15,
        borderBottomWidth:1,
        borderBottomColor:assets.color.grey
    },

    signup_btn:{
        height:50,
        borderRadius:2,
        marginTop:40,
        marginLeft:20,
        marginRight:20,
        marginBottom:10,
    }
})